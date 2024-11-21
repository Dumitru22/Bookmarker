import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from '../../src/assets/product-interface';
import { CreateBookmarker, GetEditBookmarker, EditBookmarkerList, GetBookmarkeList, FilterBookmarkerList } from './bookmarker.actions';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface BookmarkerStateModel {
  bookmarkList: Product[],
  filterBookmarkList: Product[],
  editBookmarkList: Product[],
  created: Product[],
  editBookmark: Product,
  filterValue: string,

}

@State<BookmarkerStateModel>({
  name: 'bookmarker',
  defaults: {
    bookmarkList: [],
    filterBookmarkList:[],
    editBookmarkList: [],
    created: [],
    editBookmark: {name: '', url: '', date: '', id: 0},
    filterValue: ''
  }
})

@Injectable()
export class BookmarkerState {
  private apiUrl = 'api/products';

  constructor(private http: HttpClient) {}

  @Selector()
  static getBookmarkeList(state: BookmarkerStateModel): Product[] {
    return state.editBookmarkList.length ? state.editBookmarkList : state.bookmarkList
  }

  @Selector()
  static getEditBookmarker(state: BookmarkerStateModel): Product {
    return state.editBookmark;
  }

  @Selector()
  static getFilterBookmarker(state: BookmarkerStateModel): string {
    return state.filterValue;
  }

  @Selector()
  static getFilterList(state: BookmarkerStateModel): Product[] {
    return state.filterBookmarkList;
  }
  

  @Action(GetBookmarkeList)
  getBookmarkerList(data: StateContext<BookmarkerStateModel>) { //Get bookmarker List
    const state = data.getState();
    let list = this.http.get<Product[]>(this.apiUrl).pipe(
      tap((bookmarkers: Product[]) => {
        data.patchState({bookmarkList: [...bookmarkers, ...state.created]})
      })
    );
    return list;
  }
  
  @Action(CreateBookmarker)
  createBookmarkers(data: StateContext<BookmarkerStateModel>, action: CreateBookmarker) { // Create
    const state = data.getState();
    let newObject: Product = action.bookmarkDetails.value;
    newObject.id = state.bookmarkList[state.bookmarkList.length - 1].id + 1;
    data.patchState({created: [...state.created, newObject]})
    data.patchState({editBookmarkList: state.editBookmarkList.length ? [...state.bookmarkList, newObject] : [...state.bookmarkList, newObject]})
  }

  @Action(GetEditBookmarker)
  getEditBookmarkers(data: StateContext<BookmarkerStateModel>, action: GetEditBookmarker) { // Edit
    const state = data.getState();
    data.patchState({editBookmark: action.bookmarkDetails})
  }

  @Action(EditBookmarkerList)
  editBookmarkerList(data: StateContext<BookmarkerStateModel>, action: EditBookmarkerList) {  // Edited list
    const state = data.getState();
    if(state.editBookmarkList.length) {
      state.editBookmarkList.filter((r: Product) => {
        if(r.id === state.editBookmark.id) {
          r.url = action.bookmarkDetails.value.url,
          r.name = action.bookmarkDetails.value.name
        }
      })
      data.patchState({editBookmarkList: [...state.editBookmarkList]})
    } else {
      state.bookmarkList.filter((r: Product) => {
        if(r.id === state.editBookmark.id) {
          r.url = action.bookmarkDetails.value.url,
          r.name = action.bookmarkDetails.value.name
        }
      })
      data.patchState({editBookmarkList: state.bookmarkList})
    }
  }

  @Action(FilterBookmarkerList)
  filterBookmarkerList(data: StateContext<BookmarkerStateModel>, action: FilterBookmarkerList) { // Filter
    data.patchState({filterValue: action.filterValue});
    const state = data.getState();

    let filterList: Product[] = [];
    if(state.editBookmarkList.length) {
      filterList = state.editBookmarkList.filter(r => r.name.toLowerCase().includes(action.filterValue.toLowerCase()));
    } else {
      filterList = state.bookmarkList.filter(r => r.name.toLowerCase().includes(action.filterValue.toLowerCase()));
    }
    data.patchState({filterBookmarkList: action.filterValue ? filterList : []});
  }
}
