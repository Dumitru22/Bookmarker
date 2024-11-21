import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CreateBookmarker } from '../../../store/bookmarker/bookmarker.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookmark-create',
  templateUrl: './bookmark-create.component.html',
  styleUrl: './bookmark-create.component.scss'
})
export class BookmarkCreateComponent {

  constructor(private store: Store) {}

  createBookmark(form: FormGroup){
    this.store.dispatch(new CreateBookmarker(form));
  }
}
