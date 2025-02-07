import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constants';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {


  constructor(private http: HttpClient) { }

  updateProfile1(updateData: any) {

     return this.http.patch(`${BASE_URL}/profile/update`, updateData,{ withCredentials: true });
  }

  addWorkExperience(Experience: any) {
    
    return this.http.patch(`${BASE_URL}/profile/update`, Experience,{ withCredentials: true });
  }

  addStudy(Study: any) {
    
    return this.http.patch(`${BASE_URL}/profile/update`, Study,{ withCredentials: true });
  }


  updateProfilePicture(formData: FormData) {
    return this.http.post(`${BASE_URL}/profile/upload_photo`, formData,{ withCredentials: true });
  }

  uploadCv(fileData: FormData) {
    return this.http.post(`${BASE_URL}/profile/cv_upload`, fileData,{ withCredentials: true });
  }
  
  getProfile(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/profile/all_info`,{ withCredentials: true });
  }
  getPhoto(): Observable<Blob> {
    return this.http.get(`${BASE_URL}/profile/photo`, { responseType: 'blob', withCredentials: true  });
  }

  getCV(): Observable<Blob> {
    return this.http.get(`${BASE_URL}/profile/cv`, { responseType: 'blob', withCredentials: true });
  }
}
