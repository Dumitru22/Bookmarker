import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkCreateComponent } from './bookmark-create/bookmark-create.component';
import { BookmarkEditComponent } from './bookmark-edit/bookmark-edit.component';

const routes: Routes = [
  {path:"", component: BookmarkListComponent},
  {path:"create", component: BookmarkCreateComponent},
  {path:"edit", component: BookmarkEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
