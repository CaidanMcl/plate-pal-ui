import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPlateFormComponent } from './number-plate-form.component';

describe('NumberPlateFormComponent', () => {
  let component: NumberPlateFormComponent;
  let fixture: ComponentFixture<NumberPlateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberPlateFormComponent]
    });
    fixture = TestBed.createComponent(NumberPlateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
