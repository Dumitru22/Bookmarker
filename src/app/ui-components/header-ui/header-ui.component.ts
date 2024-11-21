import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FilterBookmarkerList } from '../../../../store/bookmarker/bookmarker.actions';

@Component({
  selector: 'app-header-ui',
  templateUrl: './header-ui.component.html',
  styleUrl: './header-ui.component.scss'
})

export class HeaderUiComponent{

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
    this.router.navigate(['']);
    this.filterValue = '';
    this.store.dispatch(new FilterBookmarkerList(''));
  }
}
