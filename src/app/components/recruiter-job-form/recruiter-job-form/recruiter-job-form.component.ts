import { Component, TrackByFunction } from '@angular/core';
import { JobOfferService, JobOffer } from '../../../services/job-offers.service';

@Component({
  selector: 'app-recruiter-job-form',
  templateUrl: './recruiter-job-form.component.html',
  styleUrls: ['./recruiter-job-form.component.css']
})
export class RecruiterJobFormComponent {
  job: JobOffer = {
    id: '', // Initialize as empty string
    title: '',
    company: '',
    location: '',
    description: '',
    employmentType: 'Full-time',
    experienceLevel: 'Entry',
    educationLevel: '',
    applicationDeadline: undefined,
    remoteOption: false,
    industry: '',
    contactEmail: '',
    applicationUrl: '',
    companyLogoUrl: '',
    requirements: [''],
    benefits: [], // Initialize as an empty array
    responsibilities: [], // Initialize as an empty array
    keywords: [], // Initialize as an empty array
    active: true,
    postedDate: new Date(), 
    recruiterId: 'some-recruiter-id', 
  };
trackByIndex(index: number, obj: any): any {
  return index;
}


  constructor(private jobOfferService: JobOfferService) {}

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

  submitForm(form: any) {
    if (form.valid) {
      // Create a copy of job to prevent modifying the original object
      let jobToSubmit: any = { ...this.job };
  
      // Convert applicationDeadline to Date only if it's provided
      if (jobToSubmit.applicationDeadline) {
        jobToSubmit.applicationDeadline = new Date(jobToSubmit.applicationDeadline); // Convert string to Date
      } else {
        jobToSubmit.applicationDeadline = undefined; // Ensure it's undefined if empty
      }
  
      jobToSubmit.postedDate = new Date().toISOString(); // Ensure postedDate is a string in ISO format
  
      console.log('Job offer request payload:', jobToSubmit);
  
      this.jobOfferService.createJobOffer(jobToSubmit).subscribe(
        (response: any) => {
          console.log('Job Offer Created:', response);
          alert('Job offer created successfully!');
        },
        (error: any) => {
          console.error('Error creating job offer:', error);
          alert('Error creating job offer. Please check your input and try again.');
        }
      );
    } else {
      console.log('Form is invalid');
      alert('Please fill all required fields correctly.');
    }
  }
}