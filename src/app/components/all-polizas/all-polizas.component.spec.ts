import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPolizasComponent } from './all-polizas.component';

describe('AllPolizasComponent', () => {
  let component: AllPolizasComponent;
  let fixture: ComponentFixture<AllPolizasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPolizasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
