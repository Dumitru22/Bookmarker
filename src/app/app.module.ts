import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderUiComponent } from './ui-components/header-ui/header-ui.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { MatListModule } from '@angular/material/list';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BookmarkerState } from '../../store/bookmarker/bookmarker.state';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDbService } from './get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BookmarkCreateComponent } from './bookmark-create/bookmark-create.component';
import { BookmarkEditComponent } from './bookmark-edit/bookmark-edit.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ErrorPageUiComponent } from './ui-components/error-page-ui/error-page-ui.component';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';
import { ConfirmModalUiComponent } from './ui-components/confirm-modal-ui/confirm-modal-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderUiComponent,
    BookmarkListComponent,
    BookmarkCreateComponent,
    BookmarkEditComponent,
    BookmarkFormComponent,
    ErrorPageUiComponent,
    ConfirmModalUiComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([BookmarkerState], { developmentMode: /** !environment.production */ false }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDbService),
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    MockDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
