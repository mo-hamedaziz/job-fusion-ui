import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private jobApplicationService: JobApplicationService, private cdr: ChangeDetectorRef) {}

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
  /*
  viewCV(applicationId: string): void {
  this.jobApplicationService.getCV(applicationId).subscribe(
    (blob) => this.openFile(blob),
    (error) => console.warn('No CV found for this application.')
  );
}

viewCoverLetter(applicationId: string): void {
  this.jobApplicationService.getCoverLetter(applicationId).subscribe(
    (blob) => this.openFile(blob),
    (error) => console.warn('No Cover Letter found for this application.')
  );
}

// Function to create a file URL and open in a new tab
private openFile(blob: Blob): void {
  if (blob.size > 0) {
    const fileURL = URL.createObjectURL(blob);
    window.open(fileURL, '_blank');
  } else {
    console.warn('File is empty.');
  }
}
*/

  acceptApplication(applicationId: string): any {
    this.jobApplicationService.acceptApplication(applicationId).subscribe({
      next: () => {
        console.log("testtt"); // ✅ Should print if request succeeds
        this.updateApplicationStatus(applicationId, 'accepted');
      },
      error: (err) => {
        console.error("❌ Error accepting application:", err); // Debugging errors
      }
    });
  }

  rejectApplication(applicationId: string): void {
    this.jobApplicationService.rejectApplication(applicationId).subscribe({
      next: () => {
        console.log("testtt"); // Should print if request succeeds
        this.updateApplicationStatus(applicationId, 'rejected');
      },
      error: (err) => {
        console.error("Error rejecting application:", err);
      }
    });
  }

  private updateApplicationStatus(applicationId: string, status: 'accepted' | 'rejected'): void {
    console.log("hethi update")
    this.applications = this.applications.map(app =>
      app.id === applicationId ? { ...app, status } : app
    );

    // **Ensure UI updates** by forcing Angular to detect changes.
    this.applications = [...this.applications]; // Trigger change detection
    this.cdr.detectChanges(); // Manually detect changes (optional)
    console.log("hethi changed")
  }
}
