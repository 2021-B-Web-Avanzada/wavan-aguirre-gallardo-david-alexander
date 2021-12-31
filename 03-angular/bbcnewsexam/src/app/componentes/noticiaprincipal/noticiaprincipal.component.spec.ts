import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaprincipalComponent } from './noticiaprincipal.component';

describe('NoticiaprincipalComponent', () => {
  let component: NoticiaprincipalComponent;
  let fixture: ComponentFixture<NoticiaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
