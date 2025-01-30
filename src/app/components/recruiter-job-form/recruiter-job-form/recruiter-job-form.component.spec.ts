import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterJobFormComponent } from './recruiter-job-form.component';

describe('RecruiterJobFormComponent', () => {
  let component: RecruiterJobFormComponent;
  let fixture: ComponentFixture<RecruiterJobFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterJobFormComponent]
    });
    fixture = TestBed.createComponent(RecruiterJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
