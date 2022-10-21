import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Broma } from '../broma';

@Component({
  selector: 'app-broma-formulario',
  templateUrl: './broma-formulario.component.html',
  styleUrls: ['./broma-formulario.component.css']
})
export class BromaFormularioComponent implements OnInit {
@Output() nuevaBromaEvento:EventEmitter<Broma>=new EventEmitter<Broma>();
  constructor() { }
crearBroma(setup:string,punchline:string){
  let miBroma:Broma=new Broma(setup,punchline);
  this.nuevaBromaEvento.emit(miBroma);
}
  ngOnInit(): void {
  }

}
