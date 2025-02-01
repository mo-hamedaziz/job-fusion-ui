import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterApgeComponent } from './recruiter-apge.component';

describe('RecruiterApgeComponent', () => {
  let component: RecruiterApgeComponent;
  let fixture: ComponentFixture<RecruiterApgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterApgeComponent]
    });
    fixture = TestBed.createComponent(RecruiterApgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
