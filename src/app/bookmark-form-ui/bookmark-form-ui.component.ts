import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { CreateBookmarker } from '../../../store/bookmarker/bookmarker.actions';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-bookmark-form-ui',
  templateUrl: './bookmark-form-ui.component.html',
  styleUrl: './bookmark-form-ui.component.scss'
})
export class BookmarkFormComponent {

  constructor(private store: Store, private router: Router){}

  @Input() name: string = '';
  @Input() buttonTitle: string = '';
  private formBuilder = inject(FormBuilder);

  bookmarkForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    date: [new Date().toISOString()]
  });


  createBookmark(){
    this.router.navigate(['/'])
    this.store.dispatch(new CreateBookmarker(this.bookmarkForm));
  }
}
