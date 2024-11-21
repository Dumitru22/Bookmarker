import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FilterBookmarkerList } from '../../../store/bookmarker/bookmarker.actions';
import { BookmarkerState } from '../../../store/bookmarker/bookmarker.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(private router: Router, private store: Store){}

  filterValue: string = '';

  createBookmarkPage() {
    this.router.navigate(['/create']);
    this.filterValue = '';
    this.store.dispatch(new FilterBookmarkerList(''));
  }

  onFilterChange(value: string) {
    this.store.dispatch(new FilterBookmarkerList(value));
  }

  refreshPage(){
    this.router.navigate([''])
  }
}
