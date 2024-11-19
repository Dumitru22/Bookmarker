import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BookmarkerState } from '../../store/store/bookmarker/states/bookmarker.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private store: Store){

  }
  
  bookmarks$!: Observable<any>
  
  ngOnInit(){
    this.bookmarks$ = this.store.select(BookmarkerState.getBookmarker);
  }
}
