import { Component, OnInit ,Input} from '@angular/core';
import { Broma } from '../broma';


@Component({
  selector: 'app-broma',
  templateUrl: './broma.component.html',
  styleUrls: ['./broma.component.css']
})
export class BromaComponent implements OnInit {
@Input()bromaHijo?:Broma;
  constructor() { }

  ngOnInit(): void {
  }

}
