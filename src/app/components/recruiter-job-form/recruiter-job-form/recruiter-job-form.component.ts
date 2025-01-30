import { Component } from '@angular/core';

@Component({
  selector: 'app-recruiter-job-form',
  templateUrl: './recruiter-job-form.component.html',
  styleUrls: ['./recruiter-job-form.component.css']
})
export class RecruiterJobFormComponent {
  job = {
    title: '',
    company: '',
    location: '',
    description: '',
    employmentType: 'Full-time',
    experienceLevel: 'Entry',
    educationLevel: '',
    applicationDeadline: '',
    remoteOption: false,
    industry: '',
    postedDate: new Date(),
    contactEmail: '',
    applicationUrl: '',
    companyLogoUrl: '',
    requirements: [''],
    benefits: [''],
    responsibilities: [''],
    keywords: ['']
  };

  addRequirement() {
    this.job.requirements.push('');
  }
  addBenefit() {
    this.job.benefits.push('');
  }
  addResponsibility() {
    this.job.responsibilities.push('');
  }
  addKeyword() {
    this.job.keywords.push('');
  }

  removeRequirement(index: number) {
    this.job.requirements.splice(index, 1);
  }
  removeBenefit(index: number) {
    this.job.benefits.splice(index, 1);
  }
  removeResponsibility(index: number) {
    this.job.responsibilities.splice(index, 1);
  }
  removeKeyword(index: number) {
    this.job.keywords.splice(index, 1);
  }

  submitForm(form: any) {
    if (form.valid) {
      console.log('Job Offer Submitted:', this.job);
      // Here, you can send the form data to the backend
    } else {
      console.log('Form is invalid');
    }
  }
}
