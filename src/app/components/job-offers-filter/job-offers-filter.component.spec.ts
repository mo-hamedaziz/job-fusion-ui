import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersFilterComponent } from './job-offers-filter.component';

describe('JobOffersFilterComponent', () => {
  let component: JobOffersFilterComponent;
  let fixture: ComponentFixture<JobOffersFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOffersFilterComponent]
    });
    fixture = TestBed.createComponent(JobOffersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
