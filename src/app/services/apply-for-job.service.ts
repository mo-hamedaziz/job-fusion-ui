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

interface JobApplicationResponse {
  id: string;
  user: { name: string };
  motivationParagraph?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApplyForJobService {
  constructor(private http: HttpClient) {}

  private API_URL = `${BASE_URL}/job-application`;

  createJobApplication(formData: FormData, jobOfferId: string): Observable<JobApplicationResponse> {
    return this.http.post<JobApplicationResponse>(`${this.API_URL}?jobOfferId=${jobOfferId}`, formData, { withCredentials: true });
  }

  getJobApplications(): Observable<JobApplicationDtO[]> {
    return this.http.get<JobApplicationDtO[]>(this.API_URL, { withCredentials: true });
  }

  getPendingApplications(): Observable<JobApplicationResponse[]> {
      return this.http.get<JobApplicationResponse[]>(`${this.API_URL}/all_applications`, { withCredentials: true });
    }
}
