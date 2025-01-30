import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent {
  constructor(private profileService: ProfileService) {}

  @Input() mainData: {
    Summary: string;
    WorkExperiences: { company: string; role: string; start: string; end: string }[];
    Studies: { institution: string; degree: string; from: string; to: string }[];
    Languages: string[];
  } = {
    Summary: '',
    WorkExperiences: [],
    Studies: [],
    Languages: []
  };

  // Predefined list of languages
  availableLanguages: string[] = ['English', 'French', 'Spanish', 'German', 'Arabic', 'Chinese', 'Japanese'];
  selectedLanguage: string = '';

  isEditing = false;
  editableSummary = '';

  // Edit the summary
  editSummary() {
    this.isEditing = true;
    this.editableSummary = this.mainData.Summary;
  }

  // Save summary to the server
  saveSummary() {
    this.profileService.updateProfile1(this.editableSummary).subscribe((response) => {
      console.log('Summary update response:', response);
      if (response.status === 'success') {
        this.mainData.Summary = this.editableSummary;
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
      this.profileService.addWorkExperience(this.newWorkExperience).subscribe({
        next: (response) => {
          console.log('Response from server:', response);
          if (response.status === 'success') {
            this.mainData.WorkExperiences.push({ ...this.newWorkExperience });
            this.newWorkExperience = { company: '', role: '', start: '', end: '' };
            this.isAddingWorkExperience = false;
          }
        },
        error: (err) => {
          console.error('Error adding work experience:', err);
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
      this.profileService.addStudy(this.newStudy).subscribe({
        next: (response) => {
          console.log('Response from server:', response);
          if (response.status === 'success') {
            this.mainData.Studies.push({ ...this.newStudy });
            this.newStudy = { institution: '', degree: '', from: '', to: '' };
            this.isAddingStudy = false;
          }
        },
        error: (err) => {
          console.error('Error adding study:', err);
        },
      });
    }
  }

  // Add a selected language
  addLanguage() {
    if (this.selectedLanguage && !this.mainData.Languages.includes(this.selectedLanguage)) {
      this.profileService.addLanguage(this.selectedLanguage).subscribe({
        next: (response) => {
          console.log('Language added:', response);
          if (response.status === 'success') {
            this.mainData.Languages.push(this.selectedLanguage);
            this.selectedLanguage = ''; // Clear the selected language
          }
        },
        error: (err) => {
          console.error('Error adding language:', err);
        },
      });
    }
  }

  // Update the selected language
  onLanguageChange() {
    // Handle any additional actions when the language changes if needed
  }
  // Delete a language
deleteLanguage(language: string) {
  const index = this.mainData.Languages.indexOf(language);
  if (index !== -1) {
    this.mainData.Languages.splice(index, 1); // Remove the language from the list
    // Optionally, notify the server to update the profile with the new languages list
    this.profileService.deleteLanguage(language).subscribe({
      next: (response) => {
        console.log('Language deleted:', response);
      },
      error: (err) => {
        console.error('Error deleting language:', err);
      },
    });
  }
}

}
