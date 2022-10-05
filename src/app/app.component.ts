import { Component } from '@angular/core';

@Component({
  selector: 'joke-list',
  

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeComponent {
  title = 'Prueba2022';
  
  jokes: Object[];
  constructor() {
  this.jokes = [
  {
  setup: "What did the cheese say when it looked in the mirror?",
  punchline: "Hello-Me (Halloumi)"
  },
  {
  setup: "What kind of cheese do you use to disguise a small horse?",
  punchline: "Mask-a-pony (Mascarpone)"
  },
  {
  setup: "A kid threw a lump of cheddar at me",
  punchline: "I thought ‘That’s not very mature’"
  },
  ];
  }
}
