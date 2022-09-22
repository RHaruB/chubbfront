import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSeguroComponent } from './insert-seguro.component';

describe('InsertSeguroComponent', () => {
  let component: InsertSeguroComponent;
  let fixture: ComponentFixture<InsertSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSeguroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
