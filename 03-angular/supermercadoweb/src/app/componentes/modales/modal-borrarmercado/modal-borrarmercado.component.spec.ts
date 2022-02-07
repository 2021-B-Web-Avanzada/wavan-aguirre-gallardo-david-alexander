import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBorrarmercadoComponent } from './modal-borrarmercado.component';

describe('ModalBorrarmercadoComponent', () => {
  let component: ModalBorrarmercadoComponent;
  let fixture: ComponentFixture<ModalBorrarmercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBorrarmercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBorrarmercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
