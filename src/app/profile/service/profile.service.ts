import { Injectable } from '@angular/core';
import { of } from 'rxjs';
// Uncomment for real backend
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // Uncomment for real backend
  // private apiUrl = 'http://your-api-url/profile/update';

  // Uncomment for real backend
  // constructor(private http: HttpClient) { }
  constructor() {}

  updateProfile1(updateData: any) {
    // Mock implementation
    console.log('Mock API Call - Would send:', updateData);
    return of({
      status: 'success',
      message: 'Update simulated',
      data: updateData,
    });

    // Uncomment for real backend
    // return this.http.patch(this.apiUrl, updateData);
  }

  addWorkExperience(newExperience: any) {
    // Mock implementation
    console.log('Mock API Call - Adding work experience:', newExperience);
    return of({
      status: 'success',
      message: 'Work experience added successfully',
      data: newExperience,
    });

    // Uncomment for real backend
    // return this.http.post(`${this.apiUrl}/work-experience`, newExperience);
  }

  addStudy(newStudy: any) {
    // Mock implementation
    console.log('Mock API Call - Adding study:', newStudy);
    return of({
      status: 'success',
      message: 'Study added successfully',
      data: newStudy,
    });
  
    // Uncomment for real backend
    // return this.http.post(`${this.apiUrl}/studies`, newStudy);
  }
  // Add language to profile
  addLanguage(language: string) {
    console.log('Mock API Call - Adding study:', language);
    return of({
      status: 'success',
      message: 'Language added successfully',
      data: language,
    });
    //return this.http.post(`${this.apiUrl}/profile/languages`, { language });
  }
}