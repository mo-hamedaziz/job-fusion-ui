import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface JobOffer {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})

export class JobOfferService {
  
  private jobOffers: JobOffer[] = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', description: 'Develop and maintain frontend applications.' },
    { id: 2, title: 'Backend Developer', company: 'CodeFactory', location: 'New York, USA', description: 'Design and implement backend services.' },
    { id: 3, title: 'Full Stack Developer', company: 'InnovateX', location: 'San Francisco, USA', description: 'Work on both frontend and backend systems.' },
    { id: 4, title: 'Data Scientist', company: 'DataWiz', location: 'Boston, USA', description: 'Analyze data and build predictive models.' },
    { id: 5, title: 'UI/UX Designer', company: 'CreativeSolutions', location: 'Los Angeles, USA', description: 'Design user interfaces and improve user experiences.' },
    { id: 6, title: 'DevOps Engineer', company: 'CloudWorks', location: 'Austin, USA', description: 'Manage CI/CD pipelines and cloud infrastructure.' },
    { id: 7, title: 'Product Manager', company: 'NextGenTech', location: 'Seattle, USA', description: 'Oversee product development lifecycle.' },
    { id: 8, title: 'QA Engineer', company: 'QualityFirst', location: 'Chicago, USA', description: 'Test software and ensure quality assurance.' },
    { id: 9, title: 'Mobile Developer', company: 'AppMakers', location: 'Remote', description: 'Build and maintain mobile applications.' },
    { id: 10, title: 'Machine Learning Engineer', company: 'AI Innovations', location: 'San Jose, USA', description: 'Develop and train machine learning models.' },
    { id: 11, title: 'Cybersecurity Analyst', company: 'SecureCorp', location: 'Houston, USA', description: 'Monitor and respond to security threats.' },
    { id: 12, title: 'Blockchain Developer', company: 'CryptoLabs', location: 'Miami, USA', description: 'Build blockchain-based applications.' },
    { id: 13, title: 'Cloud Engineer', company: 'SkyHigh', location: 'Denver, USA', description: 'Deploy and manage cloud services.' },
    { id: 14, title: 'Game Developer', company: 'GameStudioX', location: 'Las Vegas, USA', description: 'Design and develop video games.' },
    { id: 15, title: 'Systems Administrator', company: 'ITServices', location: 'Dallas, USA', description: 'Maintain IT systems and networks.' },
    { id: 16, title: 'Technical Writer', company: 'WriteTech', location: 'Portland, USA', description: 'Create technical documentation and user guides.' },
    { id: 17, title: 'AI Researcher', company: 'DeepThink', location: 'Palo Alto, USA', description: 'Research advancements in AI technologies.' },
    { id: 18, title: 'Marketing Specialist', company: 'AdBoost', location: 'Atlanta, USA', description: 'Plan and execute marketing campaigns.' },
    { id: 19, title: 'IT Support Specialist', company: 'HelpDeskPlus', location: 'Remote', description: 'Provide technical support to users.' },
    { id: 20, title: 'Database Administrator', company: 'DataSafe', location: 'Philadelphia, USA', description: 'Manage and maintain databases.' },
  ];

  constructor() {}

  // Method to get job offers as an observable
  getJobOffers(): Observable<JobOffer[]> {
    return of(this.jobOffers);
  }
}
