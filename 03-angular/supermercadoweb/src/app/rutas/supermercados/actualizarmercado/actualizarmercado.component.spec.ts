import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarmercadoComponent } from './actualizarmercado.component';

describe('ActualizarmercadoComponent', () => {
  let component: ActualizarmercadoComponent;
  let fixture: ComponentFixture<ActualizarmercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarmercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarmercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
