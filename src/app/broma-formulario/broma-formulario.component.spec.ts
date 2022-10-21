import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BromaFormularioComponent } from './broma-formulario.component';

describe('BromaFormularioComponent', () => {
  let component: BromaFormularioComponent;
  let fixture: ComponentFixture<BromaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BromaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BromaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
