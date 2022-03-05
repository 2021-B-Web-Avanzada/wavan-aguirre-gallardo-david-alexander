import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerdedorComponent } from './modal-perdedor.component';

describe('ModalPerdedorComponent', () => {
  let component: ModalPerdedorComponent;
  let fixture: ComponentFixture<ModalPerdedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPerdedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPerdedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
