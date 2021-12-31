import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilasmininoticiasComponent } from './filasmininoticias.component';

describe('FilasmininoticiasComponent', () => {
  let component: FilasmininoticiasComponent;
  let fixture: ComponentFixture<FilasmininoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilasmininoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilasmininoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
