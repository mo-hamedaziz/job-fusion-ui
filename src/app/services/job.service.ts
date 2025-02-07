import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienceLevel } from './experiencelvl';
import { EmploymentType } from './employmentType';

export interface Job {
  title: string;
  company: string;
  location: string;
  description: string;
  employmentType: EmploymentType;
  requirements: string[];
  benefits: string[];
  experiencelevel: ExperienceLevel;
  educationLevel:string;
  applicationDeadline?: string;
  remoteOption?: boolean;
  status: string;
  PostedDate: string;
  responsibilites?: string[];
  keywords?: string;
  contactEmail?: string;
  applicationUrl?: string;
  companyLogoUrl?: string;
  active: boolean;
  recruiterId: string;

}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:3307/job-offer'; 

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  updateJob(job: Job): Observable<Job> {
    return this.http.patch<Job>(`${this.apiUrl}/${job.recruiterId}`, job);
  }  

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
