import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JokeListComponent } from './app.component';
import { BromaComponent } from './broma/broma.component';

@NgModule({
  declarations: [
    JokeListComponent,
    BromaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
