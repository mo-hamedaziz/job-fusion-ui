import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface JobApplicationDtO {
  id: string,
  userid:string,
  cvPath: string,
  coverletterPath:string,
  motivationParagraph: string,
  additionalComment ?: string,
}

@Injectable({
  providedIn: 'root'
})
export class ApplyForJobService {

  private API_URL = 'http://localhost:3000/job-applications';
  constructor(private http: HttpClient) { }

  createJobApplication(data: JobApplicationDtO):Observable<JobApplicationDtO>{
    return this.http.post<JobApplicationDtO>(this.API_URL,data);
  }

  getJobApplications(): Observable<JobApplicationDtO[]> {
    return this.http.get<JobApplicationDtO[]>(this.API_URL);
  }
}
