import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; // !
import { from } from 'rxjs';
import { WorkWithHttpClientComponent } from './work-with-http-client/work-with-http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkWithHttpClientComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule // !
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
