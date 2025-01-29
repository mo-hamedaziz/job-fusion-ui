import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersStatsComponent } from './job-offers-stats.component';

describe('JobOffersStatsComponent', () => {
  let component: JobOffersStatsComponent;
  let fixture: ComponentFixture<JobOffersStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOffersStatsComponent]
    });
    fixture = TestBed.createComponent(JobOffersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
