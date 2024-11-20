import { Component } from '@angular/core';
import { MockDbService } from '../get-data.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BookmarkerState } from '../../../store/bookmarker/bookmarker.state';
import { Product } from '../../assets/product-interface';
import { GetBookmarker } from '../../../store/bookmarker/bookmarker.actions';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.scss'
})
export class BookmarkListComponent {

  constructor(private store: Store){

  }
  
  bookmarkers$!: Observable<Product[]>
  
  ngOnInit(){
    this.store.dispatch(new GetBookmarker());
    this.bookmarkers$ = this.store.select(BookmarkerState.getBookmarker);
  }

}
