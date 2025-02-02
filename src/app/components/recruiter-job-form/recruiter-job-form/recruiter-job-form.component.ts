import { Component, OnInit, TrackByFunction } from '@angular/core';
import { JobOfferService, JobOffer } from '../../../services/job-offers.service';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
@Component({
  selector: 'app-recruiter-job-form',
  templateUrl: './recruiter-job-form.component.html',
  styleUrls: ['./recruiter-job-form.component.css']
})
export class RecruiterJobFormComponent implements OnInit{
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
    recruiterId: '', 
  };
trackByIndex(index: number, obj: any): any {
  return index;
}


  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    const token = Cookies.get('token');
    // console.log('JWT Token:', token);

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const userId = decodedToken.userid;
        console.log('User ID from decoded token:', userId);
        
        // Set recruiterId from decoded token
        this.job.recruiterId = userId;

      } catch (error) {
        console.error('Error decoding JWT token:', error);
      }
    }
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