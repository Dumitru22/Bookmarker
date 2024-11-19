import { UserStateModel } from './bookmarker.state';

export class GetBookmarker {
  static readonly type = '[SetUser] action';
  constructor(readonly payload: UserStateModel) {}
}
