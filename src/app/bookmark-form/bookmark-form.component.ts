import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookmarkerState } from '../../../store/bookmarker/bookmarker.state';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrl: './bookmark-form.component.scss'
})
export class BookmarkFormComponent implements OnInit{

  constructor(private store: Store, private router: Router){}

  @Input() name: string = '';
  @Input() buttonTitle: string = '';
  @Input() isEdit: boolean = false;
  @Output() editBookmarkList = new EventEmitter<FormGroup>();
  private formBuilder = inject(FormBuilder);
  bookmarker$!: Subscription;
  regex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  bookmarkForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    url: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.regex)]],
    date: [new Date().toISOString()],
    id: [0]
  });

  ngOnInit() {
    if(this.isEdit){
      this.bookmarker$ = this.store.select(BookmarkerState.getEditBookmarker).subscribe(res => 
        {this.bookmarkForm.get('url')?.setValue(res.url),
        this.bookmarkForm.get('name')?.setValue(res.name),
        this.bookmarkForm.get('id')?.setValue(res.id)}
      );
    }
  }

  editList(){
    this.router.navigate(['/'])
    this.editBookmarkList.emit(this.bookmarkForm);
  }
}
