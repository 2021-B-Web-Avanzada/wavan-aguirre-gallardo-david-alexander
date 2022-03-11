import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCargandojugadaComponent } from './modal-cargandojugada.component';

describe('ModalCargandojugadaComponent', () => {
  let component: ModalCargandojugadaComponent;
  let fixture: ComponentFixture<ModalCargandojugadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCargandojugadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCargandojugadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
