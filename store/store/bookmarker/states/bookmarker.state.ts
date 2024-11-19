import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface UserStateModel {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  positionId: string;
  positionName: string;
  departmentCode: string;
  departmentName: string;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    userId: '',
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
    positionId: '',
    positionName: '',
    departmentCode: '',
    departmentName: ''
  }
})
@Injectable()
export class BookmarkerState {
  @Selector()
  static getBookmarker(state: UserStateModel): string {
    console.log('state', state)
    return state.email;
  }
}
