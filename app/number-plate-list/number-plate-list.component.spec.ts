import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPlateListComponent } from './number-plate-list.component';

describe('NumberPlateListComponent', () => {
  let component: NumberPlateListComponent;
  let fixture: ComponentFixture<NumberPlateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberPlateListComponent]
    });
    fixture = TestBed.createComponent(NumberPlateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
