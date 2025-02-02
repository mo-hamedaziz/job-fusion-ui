import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-for-job',
  templateUrl: './apply-for-job.component.html',
  styleUrls: ['./apply-for-job.component.css']
})


export class ApplyForJobComponent {
  motivation: string = '';
  comment: string = '';
  files: { [key: string]: File | null } = { cv: null, coverLetter: null, motivationLetter: null };

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

    const formData = new FormData();
    Object.keys(this.files).forEach((key) => {
      if (this.files[key]) {
        formData.append(key, this.files[key] as File);
      }
    });

    formData.append('motivation', this.motivation);
    formData.append('comment', this.comment);

    // Simulating submission - replace this with an actual API call
    console.log('Submitting Job Application:', this.files, this.motivation, this.comment);
    alert('Application Submitted Successfully!');
  }

}
