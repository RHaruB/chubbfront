import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSegurosComponent } from './all-seguros.component';

describe('AllSegurosComponent', () => {
  let component: AllSegurosComponent;
  let fixture: ComponentFixture<AllSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSegurosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
