import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants';


interface JobApplicationResponse {
  id: string;
  motivationParagraph?: string;
  additionalComment?: string;
  status: 'pending' | 'accepted' | 'rejected';
}

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  constructor(private http: HttpClient) {}

  getAllApplications(): Observable<JobApplicationResponse[]> {
    return this.http.get<JobApplicationResponse[]>(`${BASE_URL}/job-application`, { withCredentials: true });
  }

  acceptApplication(applicationId: string): Observable<any> {
    return this.http.patch(`${BASE_URL}/job-application/${applicationId}/accept`, {}, { withCredentials: true });
  }

  rejectApplication(applicationId: string): Observable<any> {
    return this.http.patch(`${BASE_URL}/job-application/${applicationId}/reject`, {}, { withCredentials: true });
  }
}
