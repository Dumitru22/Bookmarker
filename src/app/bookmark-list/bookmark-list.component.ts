import { Component } from '@angular/core';
import { MockDbService } from '../get-data.service';
import { Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { BookmarkerState } from '../../../store/bookmarker/bookmarker.state';
import { Product } from '../../assets/product-interface';
import { GetBookmarkeList, GetEditBookmarker } from '../../../store/bookmarker/bookmarker.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.scss'
})
export class BookmarkListComponent {

  constructor(private store: Store, private router: Router){}
  
  bookmarkerList$!: Observable<Product[]>
  filterValue$!: Observable<string>
  filterList$!: Observable<Product[]>

  today: Product[] = [];
  yesterday: Product[] = [];
  older: Product[] = [];
  
  ngOnInit(){
    this.store.dispatch(new GetBookmarkeList());
    this.bookmarkerList$ = this.store.select(BookmarkerState.getBookmarkeList);
    this.filterValue$ = this.store.select(BookmarkerState.getFilterBookmarker);
    this.filterList$ = this.store.select(BookmarkerState.getFilterList);

    this.store.select(BookmarkerState.getBookmarkeList).pipe(
      map((res: Product[]) => {
          this.filterByDates(res);
        }
      )).subscribe();
  }

  filterByDates(res: Product[]) {
    this.today = [];
    this.yesterday = [];
    this.older = [];

    res.filter(r => {
      if(new Date(r.date).getDate() === new Date().getDate() && new Date(r.date).getMonth() === new Date().getMonth() && new Date(r.date).getFullYear() === new Date().getFullYear()) {
        this.today.push(r);
      } else if (new Date(r.date).getDate() === new Date().getDate() - 1 && new Date(r.date).getMonth() === new Date().getMonth() && new Date(r.date).getFullYear() === new Date().getFullYear()) {
        this.yesterday.push(r);
      } else {
        this.older.push(r);
      }
    })
  }

  editBookmark(product: Product) {
    this.store.dispatch(new GetEditBookmarker(product));
    this.router.navigate(['/edit'])
  }
}
