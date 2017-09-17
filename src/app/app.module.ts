import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicComponent } from './pic/pic.component';
import { PicListComponent } from './pic-list/pic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PicComponent,
    PicListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
