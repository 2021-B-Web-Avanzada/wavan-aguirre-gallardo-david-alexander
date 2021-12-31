import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadorTiposComponent } from './separador-tipos.component';

describe('SeparadorTiposComponent', () => {
  let component: SeparadorTiposComponent;
  let fixture: ComponentFixture<SeparadorTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparadorTiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparadorTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
