import { Component } from '@angular/core';
import { Job } from '../../mochData'; // Adjust the import path if needed

@Component({
  selector: 'app-recruiter-job-list',
  templateUrl: './recruiter-job-list.component.html',
  styleUrls: ['./recruiter-job-list.component.css']
})
export class RecruiterJobListComponent {
  jobs: Job[] = [
    { id: 1, title: 'Frontend Developer', status: 'Open', datePosted: '2025-01-15' },
    { id: 2, title: 'Backend Engineer', status: 'Closed', datePosted: '2025-01-10' },
    { id: 3, title: 'UI/UX Designer', status: 'Open', datePosted: '2025-01-20' },
  ];

  selectedJob: Job | null = null;

  selectJob(job: Job) {
    this.selectedJob = job;
  }

  addJob() {
    console.log('Redirect to Add Job Form');
  }

  editJob(job: Job | null) {
    console.log('Redirect to Edit Job Form:', job);
  }

  deleteJob(jobId: number) {
    this.jobs = this.jobs.filter(job => job.id !== jobId);
    if (this.selectedJob?.id === jobId) {
      this.selectedJob = null;
    }
  }
}

