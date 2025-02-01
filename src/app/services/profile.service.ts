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
    console.log('Mock API Call - Adding language:', language);
    return of({
      status: 'success',
      message: 'Language added successfully',
      data: language,
    });
    // Uncomment for real backend
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
    // Uncomment for real backend
    // return this.http.delete(`${this.apiUrl}/profile/languages/${language}`);
  }

  updateProfilePicture(imageUrl: string) {
    const updateData = { profilePicture: imageUrl };
    
    console.log('Mock API Call - Updating profile picture:', updateData);
    return of({
      status: 'success',
      message: 'Profile picture updated successfully!',
      data: updateData,
    });

    // Uncomment for real backend
    // return this.http.patch(this.apiUrl, updateData);
  }

  /*
  // Uncomment for real backend
  // private apiUrl = 'http://your-api-url/profile';

  // Uncomment for real backend
  // constructor(private http: HttpClient) { }
  constructor() {}

  // Mock method to fetch user profile
  getProfile() {
    // Mock implementation
    console.log('Mock API Call - Fetching user profile');
    return of({
      sidebar: {
        username: 'John Doe',
        selectedOption: 'option1',
        info: {
          birthdate: '01-01-1990',
          email: 'johndoe@example.com',
          nationality: 'American',
        },
        address: {
          country: 'USA',
          region: 'California',
          phone: '123-456-7890',
        },
      },
      main: {
        Summary:
          'I am a motivated professional with experience in software development and network engineering. Passionate about leveraging cutting-edge technologies to solve real-world challenges.',
        WorkExperiences: [
          {
            company: 'TechCorp',
            role: 'Software Engineer',
            start: '2017',
            end: '2021',
          },
        ],
        Studies: [
          {
            institution: 'INSAT',
            degree: 'Engineering in Networks and Telecommunications',
            from: '2021',
            to: '2026',
          },
        ],
        Languages: ['Arabic', 'English', 'French'],
      },
    });

    // Uncomment for real backend
    // return this.http.get(`${this.apiUrl}`);
  }

  */ 
}
