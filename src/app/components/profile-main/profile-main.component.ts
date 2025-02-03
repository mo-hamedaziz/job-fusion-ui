import { Component, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent {
  constructor(private profileService: ProfileService) {}

  @Input() summary: string = '';
  @Input() workExperiences: { company: string; role: string; start: string; end: string }[] = [];
  @Input() studies: { institution: string; degree: string; from: string; to: string }[] = [];
  @Input() languages: string[] = [];

  // Predefined list of languages
  availableLanguages: string[] = ['English', 'French', 'Spanish', 'German', 'Arabic', 'Chinese', 'Japanese'];
  selectedLanguage: string = '';

  isEditing = false;
  editableSummary = '';

  // Edit the summary
  editSummary() {
    this.isEditing = true;
    this.editableSummary = this.summary;
  }

  // Save summary to the server
  saveSummary() {
    this.profileService.updateProfile1({Summary : this.editableSummary}).subscribe((response) => {
      console.log('Summary update response:', response);
      if (response.status === 'success') {
        this.summary = this.editableSummary;
        this.isEditing = false;
      }
    });
  }

  // State for adding a new work experience
  newWorkExperience = { company: '', role: '', start: '', end: '' };
  isAddingWorkExperience = false;

  // Enable work experience input fields
  addWorkExperience() {
    this.isAddingWorkExperience = true;
  }

  // Save new work experience
  saveWorkExperience() {
    if (this.newWorkExperience.company && this.newWorkExperience.role) {
      // Add the new experience to the local list
      const updatedWorkExperiences = [...this.workExperiences, { ...this.newWorkExperience }];
  
      this.profileService.addWorkExperience(updatedWorkExperiences).subscribe({
        next: (response) => {
          console.log('Response from server:', response);
          if (response.status === 'success') {
            // Update the local state after successful update
            this.workExperiences = updatedWorkExperiences;
            this.newWorkExperience = { company: '', role: '', start: '', end: '' };
            this.isAddingWorkExperience = false;
          }
        },
        error: (err) => {
          console.error('Error updating work experiences:', err);
        },
      });
    }
  }
  

  // State for adding a new study
  newStudy = { institution: '', degree: '', from: '', to: '' };
  isAddingStudy = false;

  // Save new study
  saveStudy() {
    if (this.newStudy.institution && this.newStudy.degree) {
      // Add the new study to the local list
      const updatedStudies = [...this.studies, { ...this.newStudy }];
  
      this.profileService.addStudy(updatedStudies).subscribe({
        next: (response) => {
          console.log('Response from server:', response);
          if (response.status === 'success') {
            // Update the local state after a successful update
            this.studies = updatedStudies;
            this.newStudy = { institution: '', degree: '', from: '', to: '' };
            this.isAddingStudy = false;
          }
        },
        error: (err) => {
          console.error('Error updating studies:', err);
        },
      });
    }
  }
  

  // Add a selected language
  addLanguage() {
    if (this.selectedLanguage && !this.languages.includes(this.selectedLanguage)) {
      const updatedLanguages = [...this.languages, this.selectedLanguage];
  
      this.profileService.addLanguage(updatedLanguages).subscribe({
        next: (response) => {
          console.log('Languages updated:', response);
          if (response.status === 'success') {
            this.languages = updatedLanguages;
            this.selectedLanguage = ''; // Clear selection
          }
        },
        error: (err) => {
          console.error('Error updating languages:', err);
        },
      });
    }
  }
  

  onLanguageChange() {
  }
  // Delete a language
  deleteLanguage(language: string) {
    const updatedLanguages = this.languages.filter(lang => lang !== language);
  
    this.profileService.deleteLanguage(updatedLanguages).subscribe({
      next: (response) => {
        console.log('Languages updated:', response);
        if (response.status === 'success') {
          this.languages = updatedLanguages;
        }
      },
      error: (err) => {
        console.error('Error updating languages:', err);
      },
    });
  }

}
