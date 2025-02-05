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

  availableLanguages: string[] = ['English', 'French', 'Spanish', 'German', 'Arabic', 'Chinese', 'Japanese'];
  selectedLanguage: string = '';

  isEditing = false;
  editableSummary = '';

  editSummary() {
    this.isEditing = true;
    this.editableSummary = this.summary;
  }

  saveSummary() {
    this.profileService.updateProfile1({summary : this.editableSummary}).subscribe((response) => {
      console.log('Summary update response:', response);
      
        this.summary = this.editableSummary;
        this.isEditing = false;
      
    });
  }

  newWorkExperience = { company: '', role: '', start: '', end: '' };
  isAddingWorkExperience = false;

  addWorkExperience() {
    this.isAddingWorkExperience = true;
  }

  saveWorkExperience() {
    if (this.newWorkExperience.company && this.newWorkExperience.role) {
      const newExperience = `${this.newWorkExperience.company} - ${this.newWorkExperience.role} (${this.newWorkExperience.start} to ${this.newWorkExperience.end})`;

    if (this.workExperiences.includes(newExperience)) {
      console.warn('This work experience already exists!');
      this.newWorkExperience = { company: '', role: '', start: '', end: '' };
      this.isAddingWorkExperience = false;
      return; 
    }

    const work_experiences = [...this.workExperiences, newExperience];
      this.profileService.addWorkExperience({work_experiences}).subscribe({
        next: (response) => {
          
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
    const updatedWorkExperiences = this.workExperiences.filter(exp=> exp!==experience);
  
    this.profileService.updateProfile1({ work_experiences: updatedWorkExperiences }).subscribe({
      next: (response) => {
        this.workExperiences = updatedWorkExperiences;
      },
      error: (err) => {
        console.error('Error updating work experiences:', err);
      },
    });
  }

  newStudy = { institution: '', degree: '', from: '', to: '' };
  isAddingStudy = false;

  saveStudy() {
    if (this.newStudy.institution && this.newStudy.degree) {
      const newStudy = `${this.newStudy.institution} - ${this.newStudy.degree} (${this.newStudy.from} to ${this.newStudy.to})`;

    if (this.studies.includes(newStudy)) {
      console.warn('This work experience already exists!');
      this.newStudy = { institution: '', degree: '', from: '', to: '' };
      this.isAddingStudy = false;
      return; 
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
  
    this.profileService.updateProfile1({ studies: updatedStudies }).subscribe({
      next: (response) => {
        this.studies = updatedStudies;
      },
      error: (err) => {
        console.error('Error updating studies:', err);
      },
    });
  }
  

  addLanguage() {
    if (this.selectedLanguage && !this.languages.includes(this.selectedLanguage)) {
      const languages = [...this.languages, this.selectedLanguage];
  
      this.profileService.updateProfile1({languages}).subscribe({
        next: (response) => {
          
            this.languages = languages;
            this.selectedLanguage = ''; 
          
        },
        error: (err) => {
          console.error('Error updating languages:', err);
        },
      });
    }
  }
  

  onLanguageChange() {
  }
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
