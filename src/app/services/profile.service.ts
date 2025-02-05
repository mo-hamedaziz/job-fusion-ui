import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {


  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  updateProfile1(updateData: any) {

     return this.http.patch(`${this.apiUrl}/profile/update`, updateData,{ withCredentials: true });
  }

  addWorkExperience(Experience: any) {
    
    return this.http.patch(`${this.apiUrl}/profile/update`, Experience,{ withCredentials: true });
  }

  addStudy(Study: any) {
    
    return this.http.patch(`${this.apiUrl}/profile/update`, Study,{ withCredentials: true });
  }


  updateProfilePicture(formData: FormData) {
    return this.http.post(`${this.apiUrl}/profile/upload_photo`, formData,{ withCredentials: true });
  }

  uploadCv(fileData: FormData) {
    return this.http.post(`${this.apiUrl}/profile/cv_upload`, fileData,{ withCredentials: true });
  }
  
  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile/all_info`,{ withCredentials: true });
  }
  getPhoto(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/profile/photo`, { responseType: 'blob', withCredentials: true  });
  }

  getCV(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/profile/cv`, { responseType: 'blob', withCredentials: true });
  }
}
