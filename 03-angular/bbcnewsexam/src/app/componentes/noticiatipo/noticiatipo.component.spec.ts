import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiatipoComponent } from './noticiatipo.component';

describe('NoticiatipoComponent', () => {
  let component: NoticiatipoComponent;
  let fixture: ComponentFixture<NoticiatipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiatipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiatipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
