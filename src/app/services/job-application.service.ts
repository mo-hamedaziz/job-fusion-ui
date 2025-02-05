// job-application.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface JobApplicationResponse {
  id: string;
  user: { name: string };  // Extract only the applicant's username
  motivationParagraph?: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl = 'http://localhost:3000';  // Update with correct backend URL

  constructor(private http: HttpClient) {}

  getPendingApplications(): Observable<JobApplicationResponse[]> {
    return this.http.get<JobApplicationResponse[]>(`${this.apiUrl}/job-applications/all_applications`, { withCredentials: true });
  }
}
