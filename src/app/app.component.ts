import { Component } from '@angular/core';
import { Broma } from './broma';

@Component({
  selector: 'joke-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeListComponent {
  
  arrayBroma=[new Broma("What did the cheese say when it looked in the mirror?", "Hello-me(Halloumi)"),
    new Broma("What kind of cheese do you use to disguise a small horse?", "Mask-apony (Mascarpone)"),
    new Broma("A kid threw a lump of cheddar at me", "I thought ‘That’s not verymature’")]
  
  constructor() {

  
  }

}
 
    


