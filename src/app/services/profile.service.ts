import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {


  private apiUrl = 'http://your-api-url/profile/update';

  constructor(private http: HttpClient) { }

  updateProfile1(updateData: any) {
    // Mock implementation
    console.log('Mock API Call - Would send:', updateData);
    return of({
      status: 'success',
      message: 'Update simulated',
      data: updateData,
    });

    // return this.http.patch(this.apiUrl, updateData);
  }

  addWorkExperience(newExperience: any) {
    console.log('Mock API Call - Adding work experience:', newExperience);
    return of({
      status: 'success',
      message: 'Work experience added successfully',
      data: newExperience,
    });

    // return this.http.post(`${this.apiUrl}/work-experience`, newExperience);
  }

  addStudy(newStudy: any) {
    console.log('Mock API Call - Adding study:', newStudy);
    return of({
      status: 'success',
      message: 'Study added successfully',
      data: newStudy,
    });
  
    // return this.http.post(`${this.apiUrl}/studies`, newStudy);
  }

  // Add language to profile
  addLanguage(language: string) {
    console.log('Mock API Call - Adding language:', language);
    return of({
      status: 'success',
      message: 'Language added successfully',
      data: language,
    });
    // return this.http.post(`${this.apiUrl}/profile/languages`, { language });
  }

  // Delete language from profile
  deleteLanguage(language: string) {
    console.log('Mock API Call - Deleting language:', language);
    return of({
      status: 'success',
      message: `Language ${language} deleted successfully`,
      data: language,
    });
    // return this.http.delete(`${this.apiUrl}/profile/languages/${language}`);
    /*deleteLanguage(language: string) {
  return this.http.request('DELETE', `${this.apiUrl}/profile/languages`, {
    body: { language }
  });
}*/
  }

  updateProfilePicture(imageUrl: string) {
    const updateData = { profilePicture: imageUrl };
    
    console.log('Mock API Call - Updating profile picture:', updateData);
    return of({
      status: 'success',
      message: 'Profile picture updated successfully!',
      data: updateData,
    });

    // return this.http.patch(this.apiUrl, updateData);
  }

  /*
  
  getProfile() {
    // return this.http.get(`${this.apiUrl}`);
  }

  */ 
}
