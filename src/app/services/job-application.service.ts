import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
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
    return this.http.get<JobApplicationResponse[]>(`${BASE_URL}/job-application/AllApplications`, { withCredentials: true });
  }

  acceptApplication(applicationId: string): Observable<any> {
    console.log("Sending request to backend...");
    return this.http.patch(`${BASE_URL}/job-application/${applicationId}/accept`, {}, { withCredentials: true }).pipe(
      tap(() => console.log(" Request succeeded")), 
      catchError((err) => {
        console.error(" Request failed:", err);
        return throwError(() => err);
      })
    );
  }
  

  rejectApplication(applicationId: string): Observable<any> {
    return this.http.patch(`${BASE_URL}/job-application/${applicationId}/reject`, {}, { withCredentials: true });
  }
/*
  getCV(applicationId: string): Observable<Blob> {
  return this.http.get(`${BASE_URL}/job-application/cv?jobApplicationId=${applicationId}`, { responseType: 'blob' },{ withCredentials: true });
}

  getCoverLetter(applicationId: string): Observable<Blob> {
  return this.http.get(`${BASE_URL}/job-application/cover-letter?jobApplicationId=${applicationId}`, { responseType: 'blob' },{ withCredentials: true });
}*/
}
