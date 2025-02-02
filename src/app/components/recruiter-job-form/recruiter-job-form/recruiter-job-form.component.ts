import { Component, OnInit } from '@angular/core';
import {
  JobOfferService,
  JobOffer,
} from '../../../services/job-offers.service';
import { AuthService } from 'src/app/auth.service';
import { FormGroup } from '@angular/forms';
// import { Job } from 'src/app/mochData';
@Component({
  selector: 'app-recruiter-job-form',
  templateUrl: './recruiter-job-form.component.html',
  styleUrls: ['./recruiter-job-form.component.css'],
})
export class RecruiterJobFormComponent implements OnInit {
  job: JobOffer = {
    title: '',
    company: '',
    location: '',
    description: '',
    employmentType: 'Full-time',
    requirements: [],
    benefits: [],
    experienceLevel: 'Entry',
    educationLevel: '',
    applicationDeadline: undefined,
    remoteOption: false,
    industry: '',
    responsibilities: [],
    keywords: [],
    contactEmail: '',
    applicationUrl: '',
    companyLogoUrl: '',
    active: true,
    recruiterId: '',
    jobApplications: [],
    createdAt: new Date(),
  };

  trackByIndex(index: number): number {
    return index;
  }

  constructor(
    private jobOfferService: JobOfferService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getUserId().subscribe({
      next: (response) => {
        this.job.recruiterId = response.userId;
      },
      error: (error) => {
        console.error('Error fetching user info:', error);
      },
    });
  }

  addRequirement() {
    this.job.requirements.push('');
  }
  addBenefit() {
    this.job.benefits?.push('');
  }
  addResponsibility() {
    this.job.responsibilities?.push('');
  }
  addKeyword() {
    this.job.keywords?.push('');
  }

  removeRequirement(index: number) {
    this.job.requirements.splice(index, 1);
  }
  removeBenefit(index: number) {
    this.job.benefits?.splice(index, 1);
  }
  removeResponsibility(index: number) {
    this.job.responsibilities?.splice(index, 1);
  }
  removeKeyword(index: number) {
    this.job.keywords?.splice(index, 1);
  }

  submitForm(form: FormGroup) {
    if (form.valid) {
      // Create a copy of job to prevent modifying the original object
      const jobToSubmit: JobOffer = { ...this.job };

      // Convert applicationDeadline to Date only if it's provided
      if (jobToSubmit.applicationDeadline) {
        jobToSubmit.applicationDeadline = new Date(
          jobToSubmit.applicationDeadline
        ); // Convert string to Date
      } else {
        jobToSubmit.applicationDeadline = undefined; // Ensure it's undefined if empty
      }

      // jobToSubmit.createdAt = new Date().toISOString(); // Ensure createdAt is a string in ISO format

      console.log('Job offer request payload:', jobToSubmit);

      this.jobOfferService.createJobOffer(jobToSubmit).subscribe(
        (response) => {
          console.log('Job Offer Created:', response);
          alert('Job offer created successfully!');
        },
        (error) => {
          console.error('Error creating job offer:', error);
          alert(
            'Error creating job offer. Please check your input and try again.'
          );
        }
      );
    } else {
      console.log('Form is invalid');
      alert('Please fill all required fields correctly.');
    }
  }
}
