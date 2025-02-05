import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyForJobService, JobApplicationDtO } from 'src/app/services/apply-for-job.service';

@Component({
  selector: 'app-apply-for-job',
  templateUrl: './apply-for-job.component.html',
  styleUrls: ['./apply-for-job.component.css']
})


export class ApplyForJobComponent implements OnInit {

  constructor(private jobApplicationService: ApplyForJobService, private route: ActivatedRoute,private router: Router) {}
  selectedJobOfferId: string = '';  
  motivationParagraph: string = '';
  additionalComment: string = '';
  files: { [key: string]: File | null } = { cv: null, coverLetter: null };
  ngOnInit(): void {
      this.selectedJobOfferId = this.route.snapshot.params['job_offer_id'] || '';
  console.log('Selected Job Offer ID:', this.selectedJobOfferId);
      
    }


  onFileSelected(event: Event, fileType: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.files[fileType] = input.files[0];
    }
  }

  onSubmit() {
  
    if (!this.files['cv']) {
      alert('Please upload your CV!');
      return;
    }

    console.log('Selected files:', this.files);

    const jobApplication: JobApplicationDtO = {
      cvPath: this.files['cv']?.name || '',
      coverLetterPath: this.files['coverLetter']?.name || '',
      motivationParagraph: this.motivationParagraph,
      additionalComment: this.additionalComment,
      jobOfferId: this.selectedJobOfferId
    };
    
    console.log(jobApplication);
  
    this.jobApplicationService.createJobApplication(jobApplication).subscribe(
      (response) => {
        console.log('Application submitted:', response);
        alert('Application Submitted Successfully!');
        this.router.navigate(['/welcome']);
      },
      (error) => {
        console.error('Error submitting application:', error);
        alert('Failed to submit application.');
      }
    );
  }
}



