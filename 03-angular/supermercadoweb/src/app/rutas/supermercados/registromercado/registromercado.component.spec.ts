import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistromercadoComponent } from './registromercado.component';

describe('RegistrousuarioComponent', () => {
  let component: RegistromercadoComponent;
  let fixture: ComponentFixture<RegistromercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistromercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistromercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
