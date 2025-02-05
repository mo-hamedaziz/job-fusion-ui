import { Component, OnInit } from '@angular/core';
import { JobService, Job } from '../../services/job.service';
import { EmploymentType } from 'src/app/services/employmentType';
import { ExperienceLevel } from 'src/app/services/experiencelvl';
import { JobOfferService } from 'src/app/services/job-offers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-job-list',
  templateUrl: './recruiter-job-list.component.html',
  styleUrls: ['./recruiter-job-list.component.css']
})
export class RecruiterJobListComponent implements OnInit {
  jobs: Job[] = [];
  selectedJob?: Job;

  constructor(private jobService: JobService, private jobOfferService: JobOfferService, private router:Router) {}

  ngOnInit(): void {
    this.loadJobs();
    console.log("hola");
    this.fetchJobOffers();

  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe((data) => (this.jobs = data));
  }
  
  fetchJobOffers(): void {
    this.jobOfferService.getRecruiterJobOffers().subscribe(
      (data: any) => {
        this.jobs = data;
      },
      (error) => {
        console.error('Error fetching job offers:', error);
      }
    );
  }

  // Select a job for editing
  selectJob(job: Job): void {
    this.selectedJob = job;
  }

  // Add a new job
  addJob(): void {
    const newJob: Job = {
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco',
      description: 'Develop and maintain web applications.',
      employmentType: EmploymentType.FullTime,  // Assuming EmploymentType is an enum with a value FullTime
      requirements: ['JavaScript', 'TypeScript', 'Angular'],
      benefits: ['Health Insurance', 'Stock Options'],
      experiencelevel: ExperienceLevel.Mid,  // Assuming ExperienceLevel is a union type like 'Entry', 'Mid', 'Senior'
      educationLevel: 'Bachelor\'s',
      status: 'Open',
      PostedDate: new Date().toISOString(),
      active: true,
      recruiterId: '12345' 
    };
    this.jobService.addJob(newJob).subscribe(() => {
      this.loadJobs();
     
    });
    
  }

  // Edit an existing job
  editJob(job: Job): void {
    job.title = 'Updated Job'; 
    this.jobService.updateJob(job).subscribe(() => this.loadJobs());
  }

  // Delete a job
  deleteJob(id: number): void {
    this.jobService.deleteJob(id).subscribe(() => this.loadJobs());
  }
}
