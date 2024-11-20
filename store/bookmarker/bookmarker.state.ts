import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from '../../src/assets/product-interface';
import { CreateBookmarker, GetEditBookmarker, EditBookmarker, GetBookmarkeList } from './bookmarker.actions';
import { MockDbService } from '../../src/app/get-data.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface BookmarkerStateModel {
  loadBookmarkList: Product[],
  editBookmarkList: Product[]
  created: Product[],
  edit: Product,
}

@State<BookmarkerStateModel>({
  name: 'bookmarker',
  defaults: {
    loadBookmarkList: [],
    editBookmarkList:[],
    created: [],
    edit: {name: '', description: '', date: '', id: 0},
  }
})

@Injectable()
export class BookmarkerState {
  private apiUrl = 'api/products';

  constructor(private http: HttpClient) {}

  @Selector()
  static getBookmarkeList(state: BookmarkerStateModel): Product[] {
    return state.loadBookmarkList;
  }

  @Selector()
  static GetEditBookmarker(state: BookmarkerStateModel): Product {
    return state.edit;
  }

  @Action(GetBookmarkeList)
  getBookmarkerList(data: StateContext<BookmarkerStateModel>) {
    const state = data.getState();
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap((bookmarkers: Product[]) => {
        data.patchState({loadBookmarkList: [...bookmarkers, ...state.created]})
      })
    );
  }
  
  @Action(CreateBookmarker)
  createBookmarkers(data: StateContext<BookmarkerStateModel>, action: CreateBookmarker) {
    const state = data.getState();
    let newObject: Product = action.bookmarkDetails.value;
    newObject.id = state.loadBookmarkList[state.loadBookmarkList.length - 1].id + 1;
    data.patchState({created: [...state.created, newObject]})
  }

  @Action(GetEditBookmarker)
  GetEditBookmarkers(data: StateContext<BookmarkerStateModel>, action: GetEditBookmarker) {
    const state = data.getState();
    data.patchState({edit: action.bookmarkDetails})
  }

  @Action(EditBookmarker)
  EditBookmarkers(data: StateContext<BookmarkerStateModel>, action: EditBookmarker) {
    const state = data.getState();
    state.loadBookmarkList.filter((r: Product) => {
      if(r.id === state.edit.id) {
        r.description = action.bookmarkDetails.value.description,
        r.name = action.bookmarkDetails.value.name
      }
    })
    data.patchState({editBookmarkList: state.loadBookmarkList})
  }
}
