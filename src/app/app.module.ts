import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokeComponent } from './app.component';

@NgModule({
  declarations: [
    JokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeComponent]
})
export class AppModule { }
