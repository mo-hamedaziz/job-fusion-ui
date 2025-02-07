import { Component, OnInit } from '@angular/core';
import { EmploymentType } from 'src/app/services/employmentType';
import { ExperienceLevel } from 'src/app/services/experiencelvl';
import { JobOffer, JobOfferService } from 'src/app/services/job-offers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-job-list',
  templateUrl: './recruiter-job-list.component.html',
  styleUrls: ['./recruiter-job-list.component.css']
})
export class RecruiterJobListComponent implements OnInit {
  jobs: JobOffer[] = [];
  selectedJob?: JobOffer;

  constructor( private jobOfferService: JobOfferService, private router:Router) {}

  ngOnInit(): void {
    //this.loadJobs();
  
    this.fetchJobOffers();

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

  selectJob(job: JobOffer): void {
    this.selectedJob = job;
  }

  addJob(): void {
    const newJob: JobOffer = {
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco',
      description: 'Develop and maintain web applications.',
      employmentType: 'Full-time', 
      requirements: ['JavaScript', 'TypeScript', 'Angular'],
      benefits: ['Health Insurance', 'Stock Options'],
      experienceLevel: ExperienceLevel.Mid,
      educationLevel: 'Bachelor\'s',
      active: true,
    };
    this.jobOfferService.createJobOffer(newJob).subscribe(() => {
      this.fetchJobOffers();
     
    });
    
  }

  editJob(job: JobOffer): void {
    job.title = 'Updated Job'; 
    this.jobOfferService.updateJobOffer(job).subscribe(() => this.fetchJobOffers());
  }

  deleteJob(id: string): void {
    this.jobOfferService.deleteJobOffer(id).subscribe(() => this.fetchJobOffers());
  }
}
