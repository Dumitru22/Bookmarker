import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgxsModule } from '@ngxs/store';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    NgxsModule.forRoot([], { developmentMode: /** !environment.production */ false }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
