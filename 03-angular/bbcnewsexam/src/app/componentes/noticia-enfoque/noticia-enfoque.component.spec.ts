import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaEnfoqueComponent } from './noticia-enfoque.component';

describe('NoticiaEnfoqueComponent', () => {
  let component: NoticiaEnfoqueComponent;
  let fixture: ComponentFixture<NoticiaEnfoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaEnfoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaEnfoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
