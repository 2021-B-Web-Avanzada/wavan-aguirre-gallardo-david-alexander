import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBorrarproductoComponent } from './modal-borrarproducto.component';

describe('ModalBorrarproductoComponent', () => {
  let component: ModalBorrarproductoComponent;
  let fixture: ComponentFixture<ModalBorrarproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBorrarproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBorrarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
