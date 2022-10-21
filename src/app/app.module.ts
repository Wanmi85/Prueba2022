import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JokeListComponent } from './app.component';
import { BromaComponent } from './broma/broma.component';
import { BromaFormularioComponent } from './broma-formulario/broma-formulario.component';

@NgModule({
  declarations: [
    JokeListComponent,
    BromaComponent,
    BromaFormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
