import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersSearchBarComponent } from './job-offers-search-bar.component';

describe('JobOffersSearchBarComponent', () => {
  let component: JobOffersSearchBarComponent;
  let fixture: ComponentFixture<JobOffersSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOffersSearchBarComponent]
    });
    fixture = TestBed.createComponent(JobOffersSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
