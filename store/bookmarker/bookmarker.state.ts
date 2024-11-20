import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from '../../src/assets/product-interface';
import { CreateBookmarker, GetBookmarker } from './bookmarker.actions';
import { MockDbService } from '../../src/app/get-data.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface BookmarkerStateModel {
  bookmarkerList: Product[],
  created: Product[]
}

@State<BookmarkerStateModel>({
  name: 'bookmarker',
  defaults: {
    bookmarkerList: [],
    created: []
  }
})

@Injectable()
export class BookmarkerState {
  private apiUrl = 'api/products';

  constructor(private http: HttpClient) {}

  @Selector()
  static getBookmarker(state: BookmarkerStateModel): Product[] {
    return state.bookmarkerList;
  }

  @Action(GetBookmarker)
  getBookmarkers(data: StateContext<BookmarkerStateModel>, action: GetBookmarker) {
    const state = data.getState();
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap((bookmarkers: Product[]) => {
        data.patchState({bookmarkerList: [...bookmarkers, ...state.created]})
      })
    );
  }
  
  @Action(CreateBookmarker)
  createBookmarkers(data: StateContext<BookmarkerStateModel>, action: CreateBookmarker) {
    const state = data.getState();
    let newObject: Product = action.bookmarkDetails.value;
    data.patchState({created: [...state.created, newObject]})
  }
}
