import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface JobOffer {
  id?: string;
  title: string;
  company: string;
  location: string;
  description: string;
  employmentType:
    | 'Full-time'
    | 'Part-time'
    | 'Contract'
    | 'Internship'
    | 'Temporary';
  requirements: string[];
  benefits?: string[];
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  educationLevel?: string;
  applicationDeadline?: Date;
  remoteOption?: boolean;
  industry?: string;
  responsibilities?: string[];
  keywords?: string[];
  contactEmail?: string;
  applicationUrl?: string;
  companyLogoUrl?: string;
  active: boolean;
  recruiterId?: string;
  jobApplications?: {
    id: string;
  }[];
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/job-offer';


  getJobOffers(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(this.apiUrl,{ withCredentials: true });
  }

  getRecruiterJobOffers(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(`${this.apiUrl}/recruiter`,{ withCredentials: true });
  }

  createJobOffer(jobOffer: JobOffer): Observable<JobOffer> {
    return this.http.post<JobOffer>(this.apiUrl, jobOffer, { withCredentials: true });
  }

  updateJobOffer(updateJobOfferDto: Partial<JobOffer>): Observable<JobOffer> {
    return this.http.patch<JobOffer>(`${this.apiUrl}`, updateJobOfferDto);
  }

  deleteJobOffer(id:string):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
