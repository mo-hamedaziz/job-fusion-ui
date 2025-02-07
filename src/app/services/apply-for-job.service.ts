import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants';

export interface JobApplicationDtO {
  cvPath: string,
  coverLetterPath:string,
  motivationParagraph: string,
  additionalComment ?: string,
  jobOfferId: string
}

@Injectable({
  providedIn: 'root'
})
export class ApplyForJobService {
  constructor(private http: HttpClient) {}

  private API_URL = `${BASE_URL}/job-application`;

  createJobApplication(formData: FormData): Observable<any> {
    return this.http.post(this.API_URL, formData, { withCredentials: true });
  }

  getJobApplications(): Observable<JobApplicationDtO[]> {
    return this.http.get<JobApplicationDtO[]>(this.API_URL, { withCredentials: true });
  }
}
