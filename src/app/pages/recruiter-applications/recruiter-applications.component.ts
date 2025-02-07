import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from 'src/app/services/job-application.service';

interface JobApplication {
  id: string;
  motivationParagraph?: string;
  additionalComment?: string;
  status: 'pending' | 'accepted' | 'rejected';
}

@Component({
  selector: 'app-recruiter-applications',
  templateUrl: './recruiter-applications.component.html',
  styleUrls: ['./recruiter-applications.component.css']
})
export class RecruiterApplicationsComponent implements OnInit {

  applications: JobApplication[] = [];

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
    this.fetchApplications();
  }

  fetchApplications(): void {
    this.jobApplicationService.getAllApplications().subscribe((data) => {
      this.applications = data.map((app) => ({
        id: app.id,
        additionalComment: app.additionalComment || 'No comments provided',
        motivationParagraph: app.motivationParagraph || 'No motivation provided',
        status: app.status
      }));
    });
  }

  acceptApplication(applicationId: string): void {
    this.jobApplicationService.acceptApplication(applicationId).subscribe(() => {
      this.updateApplicationStatus(applicationId, 'accepted');
    });
  }

  rejectApplication(applicationId: string): void {
    this.jobApplicationService.rejectApplication(applicationId).subscribe(() => {
      this.updateApplicationStatus(applicationId, 'rejected');
    });
  }

  private updateApplicationStatus(applicationId: string, status: 'accepted' | 'rejected'): void {
    this.applications = this.applications.map(app =>
      app.id === applicationId ? { ...app, status } : app
    );
  }
}
