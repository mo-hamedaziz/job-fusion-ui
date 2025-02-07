import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl = 'http://localhost:3000/job-applications'; 

  constructor(private http: HttpClient) {}

  getApplicationsByApplicant(applicantId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${applicantId}`);
  }
}
