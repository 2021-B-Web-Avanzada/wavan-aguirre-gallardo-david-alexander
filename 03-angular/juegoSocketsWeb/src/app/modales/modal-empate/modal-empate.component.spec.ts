import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmpateComponent } from './modal-empate.component';

describe('ModalEmpateComponent', () => {
  let component: ModalEmpateComponent;
  let fixture: ComponentFixture<ModalEmpateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEmpateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmpateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
