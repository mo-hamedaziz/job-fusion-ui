import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../../services/applicant-applications.service';

@Component({
  selector: 'app-applicant-applications',
  templateUrl: './applicant-applications.component.html',
  styleUrls: ['./applicant-applications.component.css']
})
export class ApplicantApplicationsComponent implements OnInit {
  applications: any[] = [];

  constructor(private applicationsService: ApplicationsService) {}

  // Fetch applications from the backend when the component loads
  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    this.applicationsService.getApplications().subscribe((data) => {
      this.applications = data;
    });
  }

  viewApplicationDetails(applicationId: number) {
    console.log('Viewing details for application ID:', applicationId);
  }

  // Delete an application and update the list
  deleteApplication(id: number) {
    this.applicationsService.deleteApplication(id).subscribe(() => {
      this.applications = this.applications.filter(app => app.id !== id);
    });
  }
}
