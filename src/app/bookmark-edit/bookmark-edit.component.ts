import { Component } from '@angular/core';
import { CreateBookmarker, EditBookmarker } from '../../../store/bookmarker/bookmarker.actions';
import { Store } from '@ngxs/store';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrl: './bookmark-edit.component.scss'
})
export class BookmarkEditComponent {

  constructor(private store: Store) {
    
  }

  editBookmark(event: FormGroup) {
    console.log('event',event)
    // this.store.dispatch(new EditBookmarker(event));
  }
}
