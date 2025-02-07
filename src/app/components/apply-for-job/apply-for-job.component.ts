import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyForJobService } from 'src/app/services/apply-for-job.service';

@Component({
  selector: 'app-apply-for-job',
  templateUrl: './apply-for-job.component.html',
  styleUrls: ['./apply-for-job.component.css'],
})
export class ApplyForJobComponent implements OnInit {
  applicationForm!: FormGroup;
  selectedCV: File | null = null;
  selectedCoverLetter: File | null = null;
  jobOfferId: string = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private applyForJobService: ApplyForJobService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.applicationForm = this.fb.group({
      motivation: [''],
      comment: [''],
      // jobOfferId: [''],
    });

    this.route.paramMap.subscribe((params) => {
      this.jobOfferId = params.get('job_offer_id') || '';
      // this.applicationForm.patchValue({ jobOfferId });
    });
  }

  onFileChange(event: Event, type: 'cv' | 'coverLetter') {
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    if (type === 'cv') {
      this.selectedCV = file;
    } else {
      this.selectedCoverLetter = file;
    }
  }

  submitApplication() {
    if (!this.selectedCV || !this.selectedCoverLetter) {
      alert('Please upload both CV and Cover Letter.');
      return;
    }

    this.isLoading = true;

    const formData = new FormData();
    formData.append('cv', this.selectedCV);
    formData.append('cover_letter', this.selectedCoverLetter);
    formData.append('motivationParagraph', this.applicationForm.get('motivation')?.value);
    formData.append('additionalComment', this.applicationForm.get('comment')?.value);
    // formData.append('jobOfferId', this.applicationForm.get('jobOfferId')?.value);

    this.applyForJobService.createJobApplication(formData, this.jobOfferId).subscribe({
      next: () => {
        this.isLoading = false;
        alert('Application submitted successfully! Redirecting to welcome page ...');
        this.resetForm();
        this.router.navigate(['/welcome']);
      },
      error: () => {
        this.isLoading = false;
        alert('Error submitting application.');
      },
    });
  }

  private resetForm() {
    this.applicationForm.reset();
    this.selectedCV = null;
    this.selectedCoverLetter = null;
  }
}
