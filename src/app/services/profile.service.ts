import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {


  private apiUrl = 'http://loclahost:3000';

  constructor(private http: HttpClient) { }

  updateProfile1(updateData: any) {
    // Mock implementation
    console.log('Mock API Call - Would send:', updateData);
    return of({
      status: 'success',
      message: 'Update simulated',
      data: updateData,
    });

    // return this.http.patch(`${this.apiUrl}/profile/update`, updateData,{ withCredentials: true });
  }

  addWorkExperience(newExperience: any) {
    console.log('Mock API Call - Adding work experience:', newExperience);
    return of({
      status: 'success',
      message: 'Work experience added successfully',
      data: newExperience,
    });

    // return this.http.post(`${this.apiUrl}/work-experience`, newExperience,{ withCredentials: true });
  }

  addStudy(newStudy: any) {
    console.log('Mock API Call - Adding study:', newStudy);
    return of({
      status: 'success',
      message: 'Study added successfully',
      data: newStudy,
    });
  
    // return this.http.post(`${this.apiUrl}/studies`, newStudy,{ withCredentials: true });
  }

  // Add language to profile
  addLanguage(language: any) {
    console.log('Mock API Call - Adding language:', language);
    return of({
      status: 'success',
      message: 'Language added successfully',
      data: language,
    });
    // return this.http.post(`${this.apiUrl}/profile/languages`, { language },{ withCredentials: true });
  }

  // Delete language from profile
  deleteLanguage(language: any) {
    console.log('Mock API Call - Deleting language:', language);
    return of({
      status: 'success',
      message: `Language ${language} deleted successfully`,
      data: language,
    });
    // return this.http.delete(`${this.apiUrl}/profile/remove_language/${language}`,{ withCredentials: true });
    /*deleteLanguage(language: string) {
  return this.http.request('DELETE', `${this.apiUrl}/profile/languages`, {
    body: { language }
  });
}*/
  }

  updateProfilePicture(formData: FormData) {
    return this.http.post(`${this.apiUrl}/profile/uplod_photo`, formData,{ withCredentials: true });
  }

  uploadCv(fileData: FormData) {
    return this.http.post(`${this.apiUrl}/profile/cv_upload`, fileData,{ withCredentials: true });
  }
  
  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile/user_data`,{ withCredentials: true });
  }
  getPhoto(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/profile/photo`, { responseType: 'blob', withCredentials: true  });
  }

  getCV(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/profile/cv`, { responseType: 'blob', withCredentials: true });
  }
}
