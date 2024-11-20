import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { CreateBookmarker } from '../../../store/bookmarker/bookmarker.actions';
import { Router } from '@angular/router';
import {FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../assets/product-interface';
import { BookmarkerState } from '../../../store/bookmarker/bookmarker.state';

@Component({
  selector: 'app-bookmark-form-ui',
  templateUrl: './bookmark-form-ui.component.html',
  styleUrl: './bookmark-form-ui.component.scss'
})
export class BookmarkFormComponent implements OnInit{

  constructor(private store: Store, private router: Router){}

  @Input() name: string = '';
  @Input() buttonTitle: string = '';
  @Input() isEdit: boolean = false;
  @Output() editBookmarkList = new EventEmitter<FormGroup>();
  private formBuilder = inject(FormBuilder);
  bookmarker$!: Subscription

  bookmarkForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    date: [new Date().toISOString()],
  });

  ngOnInit(){
    if(this.isEdit){
      this.bookmarker$ = this.store.select(BookmarkerState.editBookmarker).subscribe(res => 
        {this.bookmarkForm.get('description')?.setValue(res.description),
        this.bookmarkForm.get('name')?.setValue(res.name)}
      );
    }
  }

  editList(){
    this.router.navigate(['/'])
    this.editBookmarkList.emit(this.bookmarkForm);
  }
}
