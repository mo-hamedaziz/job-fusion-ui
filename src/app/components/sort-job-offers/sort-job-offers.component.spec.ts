import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortJobOffersComponent } from './sort-job-offers.component';

describe('SortJobOffersComponent', () => {
  let component: SortJobOffersComponent;
  let fixture: ComponentFixture<SortJobOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortJobOffersComponent]
    });
    fixture = TestBed.createComponent(SortJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
