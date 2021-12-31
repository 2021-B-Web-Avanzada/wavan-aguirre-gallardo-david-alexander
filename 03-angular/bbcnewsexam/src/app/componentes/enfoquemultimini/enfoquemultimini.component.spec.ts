import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfoquemultiminiComponent } from './enfoquemultimini.component';

describe('EnfoquemultiminiComponent', () => {
  let component: EnfoquemultiminiComponent;
  let fixture: ComponentFixture<EnfoquemultiminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfoquemultiminiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfoquemultiminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
