import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recruiter-job-form',
  templateUrl: './recruiter-job-form.component.html',
  styleUrls: ['./recruiter-job-form.component.css']
})
export class RecruiterJobFormComponent {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      employmentType: ['Full-time', Validators.required],
      requirements: this.fb.array([]), 
      benefits: this.fb.array([]),
      experienceLevel: ['Entry', Validators.required],
      educationLevel: [''],
      applicationDeadline: [''],
      remoteOption: [false],
      industry: [''],
      postedDate: [new Date(), Validators.required],
      responsibilities: this.fb.array([]),
      keywords: this.fb.array([]),
      contactEmail: ['', [Validators.email]],
      applicationUrl: [''],
      companyLogoUrl: ['']
    });
  }

  // Getter for FormArray controls
  get requirements(): FormArray {
    return this.jobForm.get('requirements') as FormArray;
  }
  get benefits(): FormArray {
    return this.jobForm.get('benefits') as FormArray;
  }
  get responsibilities(): FormArray {
    return this.jobForm.get('responsibilities') as FormArray;
  }
  get keywords(): FormArray {
    return this.jobForm.get('keywords') as FormArray;
  }

  addRequirement() {
    this.requirements.push(this.fb.control(''));
  }
  addBenefit() {
    this.benefits.push(this.fb.control(''));
  }
  addResponsibility() {
    this.responsibilities.push(this.fb.control(''));
  }
  addKeyword() {
    this.keywords.push(this.fb.control(''));
  }

  removeRequirement(index: number) {
    this.requirements.removeAt(index);
  }
  removeBenefit(index: number) {
    this.benefits.removeAt(index);
  }
  removeResponsibility(index: number) {
    this.responsibilities.removeAt(index);
  }
  removeKeyword(index: number) {
    this.keywords.removeAt(index);
  }

  submitForm() {
    if (this.jobForm.valid) {
      console.log('Job Offer Submitted:', this.jobForm.value);
      // Here, you can send the form data to the backend
    } else {
      console.log('Form is invalid');
    }
  }


}
