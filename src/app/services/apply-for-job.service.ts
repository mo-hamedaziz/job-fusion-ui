import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  private API_URL = 'http://localhost:3000/job-application';
  constructor(private http: HttpClient) { }

  createJobApplication(data: JobApplicationDtO):Observable<JobApplicationDtO>{
    return this.http.post<JobApplicationDtO>(this.API_URL,data, { withCredentials: true });
  }

  getJobApplications(): Observable<JobApplicationDtO[]> {
    return this.http.get<JobApplicationDtO[]>(this.API_URL, { withCredentials: true });
  }
}
