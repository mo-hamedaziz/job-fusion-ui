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
  @Input() workExperiences: string[] = [];
  @Input() studies: string[] = [];
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
    this.profileService.updateProfile1({summary : this.editableSummary}).subscribe((response) => {
      console.log('Summary update response:', response);
      
        this.summary = this.editableSummary;
        this.isEditing = false;
      
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
      const newExperience = `${this.newWorkExperience.company} - ${this.newWorkExperience.role} (${this.newWorkExperience.start} to ${this.newWorkExperience.end})`;

    // Check if the experience already exists
    if (this.workExperiences.includes(newExperience)) {
      console.warn('This work experience already exists!');
      this.newWorkExperience = { company: '', role: '', start: '', end: '' };
      this.isAddingWorkExperience = false;
      return; // Stop execution if it's a duplicate
    }

    // Add the new experience to the local list
    const work_experiences = [...this.workExperiences, newExperience];
      this.profileService.addWorkExperience({work_experiences}).subscribe({
        next: (response) => {
          
            // Update the local state after successful update
            this.workExperiences = work_experiences;
            this.newWorkExperience = { company: '', role: '', start: '', end: '' };
            this.isAddingWorkExperience = false;
          
        },
        error: (err) => {
          console.error('Error updating work experiences:', err);
        },
      });
    }
  }
  deleteWorkExperience(experience:string) {
    // const updatedLanguages = this.languages.filter(lang => lang !== language);
    const updatedWorkExperiences = this.workExperiences.filter(exp=> exp!==experience);
  
    // Send the updated array to the backend
    this.profileService.updateProfile1({ work_experiences: updatedWorkExperiences }).subscribe({
      next: (response) => {
        // Update the local state after successful update
        this.workExperiences = updatedWorkExperiences;
      },
      error: (err) => {
        console.error('Error updating work experiences:', err);
      },
    });
  }

  // State for adding a new study
  newStudy = { institution: '', degree: '', from: '', to: '' };
  isAddingStudy = false;

  // Save new study
  saveStudy() {
    if (this.newStudy.institution && this.newStudy.degree) {
      const newStudy = `${this.newStudy.institution} - ${this.newStudy.degree} (${this.newStudy.from} to ${this.newStudy.to})`;

    // Check if the experience already exists
    if (this.studies.includes(newStudy)) {
      console.warn('This work experience already exists!');
      this.newStudy = { institution: '', degree: '', from: '', to: '' };
      this.isAddingStudy = false;
      return; // Stop execution if it's a duplicate
    }
    const updatedStudies = [...this.studies, newStudy];

      this.profileService.addStudy({studies:updatedStudies}).subscribe({
        next: (response) => {
      
            this.studies = updatedStudies;
            this.newStudy = { institution: '', degree: '', from: '', to: '' };
            this.isAddingStudy = false;
        },
        error: (err) => {
          console.error('Error updating studies:', err);
        },
      });
    }
  }
  deleteStudy(study: string) {
    const updatedStudies = this.studies.filter(st => st !== study);
  
    // Send the updated array to the backend
    this.profileService.updateProfile1({ studies: updatedStudies }).subscribe({
      next: (response) => {
        // Update the local state after successful update
        this.studies = updatedStudies;
      },
      error: (err) => {
        console.error('Error updating studies:', err);
      },
    });
  }
  

  // Add a selected language
  addLanguage() {
    if (this.selectedLanguage && !this.languages.includes(this.selectedLanguage)) {
      const languages = [...this.languages, this.selectedLanguage];
  
      this.profileService.updateProfile1({languages}).subscribe({
        next: (response) => {
          
            this.languages = languages;
            this.selectedLanguage = ''; // Clear selection
          
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
  
    this.profileService.updateProfile1({languages:updatedLanguages}).subscribe({
      next: (response) => {
      
          this.languages = updatedLanguages;
        
      },
      error: (err) => {
        console.error('Error updating languages:', err);
      },
    });
  }

}
