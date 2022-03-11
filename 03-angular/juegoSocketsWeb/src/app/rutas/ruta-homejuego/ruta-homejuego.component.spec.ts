import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHomejuegoComponent } from './ruta-homejuego.component';

describe('RutaHomejuegoComponent', () => {
  let component: RutaHomejuegoComponent;
  let fixture: ComponentFixture<RutaHomejuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaHomejuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHomejuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
