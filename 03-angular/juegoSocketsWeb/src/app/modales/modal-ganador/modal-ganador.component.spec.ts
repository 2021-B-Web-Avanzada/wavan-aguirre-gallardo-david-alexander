import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGanadorComponent } from './modal-ganador.component';

describe('ModalGanadorComponent', () => {
  let component: ModalGanadorComponent;
  let fixture: ComponentFixture<ModalGanadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGanadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
