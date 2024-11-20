import { Component } from '@angular/core';
import { MockDbService } from '../get-data.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BookmarkerState } from '../../../store/bookmarker/bookmarker.state';
import { Product } from '../../assets/product-interface';
import { EditBookmarker, GetBookmarker } from '../../../store/bookmarker/bookmarker.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.scss'
})
export class BookmarkListComponent {

  constructor(private store: Store, private router: Router){

  }
  
  bookmarkers$!: Observable<Product[]>
  
  ngOnInit(){
    this.store.dispatch(new GetBookmarker());
    this.bookmarkers$ = this.store.select(BookmarkerState.getBookmarker);
  }

  editBookmark(product: Product) {
    console.log('product', product)
    this.store.dispatch(new EditBookmarker(product));
    this.router.navigate(['/edit'])
  }
}
