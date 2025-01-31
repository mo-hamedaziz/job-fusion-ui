import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface JobOffer {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Temporary';
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
  // recruiter: Recruiter;
  createdAt: Date;
}


@Injectable({
  providedIn: 'root',
})

export class JobOfferService {
  private apiUrl = 'http://localhost:3000/job-offer';

  constructor(private http: HttpClient) {}

  getJobOffers(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(this.apiUrl).pipe(
      map((offers) => 
        offers.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      )
    );
  } 
}
