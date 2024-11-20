import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup } from '@angular/forms';
import { EditBookmarker } from '../../../store/bookmarker/bookmarker.actions';

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrl: './bookmark-edit.component.scss'
})
export class BookmarkEditComponent {

  constructor(private store: Store) {
    
  }

  editBookmark(form: FormGroup) {
    this.store.dispatch(new EditBookmarker(form));
  }
}
