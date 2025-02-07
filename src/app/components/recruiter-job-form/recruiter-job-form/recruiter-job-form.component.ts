import { Component, OnInit } from '@angular/core';
import {
  JobOfferService,
  JobOffer,
} from '../../../services/job-offers.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    applicationDeadline: new Date(),
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
  };

  trackByIndex(index: number): number {
    return index;
  }

  constructor(
    private jobOfferService: JobOfferService,
    private readonly authService: AuthService,
    private router: Router
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
      const jobToSubmit: JobOffer = { ...this.job };

      if (jobToSubmit.applicationDeadline) {
        jobToSubmit.applicationDeadline = new Date(
          jobToSubmit.applicationDeadline
        );
      } else {
        jobToSubmit.applicationDeadline = undefined;
      }

      this.jobOfferService.createJobOffer(jobToSubmit).subscribe(
        () => {
          alert('Job offer created successfully!');
          window.location.reload();
        },
        (error) => {
          console.error('Error creating job offer:', error);
          alert(
            'Error creating job offer. Please check your input and try again.'
          );
        }
      );
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
