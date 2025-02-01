import { HttpClient } from '@angular/common/http';
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
  recruiterId: string;
}


@Injectable({
  providedIn: 'root',
})

export class JobOfferService {
  /*
  private jobOffers: JobOffer[] = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      description: 'Develop and maintain software applications.',
      employmentType: 'Full-time',
      requirements: ['JavaScript', 'Angular', 'Node.js'],
      benefits: ['Health Insurance', 'Stock Options', 'Remote Work'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-03-01'),
      remoteOption: true,
      industry: 'Technology',
      postedDate: new Date('2025-01-15'),
      responsibilities: ['Write clean code', 'Participate in code reviews'],
      keywords: ['developer', 'JavaScript', 'full-time'],
      contactEmail: 'hr@techcorp.com',
      applicationUrl: 'https://techcorp.com/jobs/1',
      companyLogoUrl: 'https://techcorp.com/logo.png',
      active: false,
      recruiterId: ''
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnoSoft',
      location: 'New York, NY',
      description: 'Lead product development and roadmap.',
      employmentType: 'Full-time',
      requirements: ['Agile', 'JIRA', 'Communication'],
      benefits: ['401k', 'Flexible Hours'],
      experienceLevel: 'Senior',
      educationLevel: 'Master’s Degree',
      applicationDeadline: new Date('2025-02-15'),
      remoteOption: false,
      industry: 'Software',
      postedDate: new Date('2025-01-10'),
      responsibilities: ['Define product strategy', 'Collaborate with teams'],
      keywords: ['product', 'manager', 'leadership'],
      contactEmail: 'jobs@innosoft.com',
      applicationUrl: 'https://innosoft.com/jobs/2',
      companyLogoUrl: 'https://innosoft.com/logo.png',
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'DataMasters',
      location: 'Chicago, IL',
      description: 'Analyze and visualize data for insights.',
      employmentType: 'Full-time',
      requirements: ['SQL', 'Python', 'Power BI'],
      benefits: ['Health Insurance', 'Remote Work'],
      experienceLevel: 'Entry',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-03-10'),
      remoteOption: true,
      industry: 'Data Analytics',
      postedDate: new Date('2025-01-20'),
      responsibilities: ['Generate reports', 'Perform data cleaning'],
      keywords: ['data', 'analyst', 'insights'],
      contactEmail: 'careers@datamasters.com',
      applicationUrl: 'https://datamasters.com/jobs/3',
      companyLogoUrl: 'https://datamasters.com/logo.png',
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      company: 'BrightAds',
      location: 'Los Angeles, CA',
      description: 'Create and manage marketing campaigns.',
      employmentType: 'Full-time',
      requirements: ['SEO', 'Google Ads', 'Social Media Marketing'],
      benefits: ['Health Insurance', 'Paid Time Off'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-03-05'),
      remoteOption: false,
      industry: 'Marketing',
      postedDate: new Date('2025-01-18'),
      responsibilities: ['Analyze campaign performance', 'Create marketing plans'],
      keywords: ['marketing', 'SEO', 'advertising'],
      contactEmail: 'recruitment@brightads.com',
      applicationUrl: 'https://brightads.com/jobs/4',
      companyLogoUrl: 'https://brightads.com/logo.png',
    },
    {
      id: 5,
      title: 'Graphic Designer',
      company: 'DesignHub',
      location: 'Remote',
      description: 'Design visual content for clients.',
      employmentType: 'Contract',
      requirements: ['Photoshop', 'Illustrator', 'Creativity'],
      benefits: [],
      experienceLevel: 'Entry',
      educationLevel: 'Associate Degree',
      applicationDeadline: new Date('2025-03-12'),
      remoteOption: true,
      industry: 'Design',
      postedDate: new Date('2025-01-22'),
      responsibilities: ['Create logos', 'Design websites'],
      keywords: ['graphic', 'design', 'creative'],
      contactEmail: 'jobs@designhub.com',
      applicationUrl: 'https://designhub.com/jobs/5',
      companyLogoUrl: 'https://designhub.com/logo.png',
    },
    {
      id: 6,
      title: 'Customer Support Specialist',
      company: 'HelpDesk Inc.',
      location: 'Austin, TX',
      description: 'Assist customers with their inquiries.',
      employmentType: 'Full-time',
      requirements: ['Communication Skills', 'Problem Solving'],
      benefits: ['Health Insurance', 'Flexible Hours'],
      experienceLevel: 'Entry',
      educationLevel: 'High School Diploma',
      applicationDeadline: new Date('2025-02-28'),
      remoteOption: false,
      industry: 'Customer Service',
      postedDate: new Date('2025-01-16'),
      responsibilities: ['Handle customer tickets', 'Provide support'],
      keywords: ['support', 'customer', 'service'],
      contactEmail: 'support@helpdesk.com',
      applicationUrl: 'https://helpdesk.com/jobs/6',
      companyLogoUrl: 'https://helpdesk.com/logo.png',
    },
    {
      id: 7,
      title: 'Web Developer',
      company: 'WebSolutions',
      location: 'Denver, CO',
      description: 'Build and maintain web applications.',
      employmentType: 'Full-time',
      requirements: ['HTML', 'CSS', 'JavaScript'],
      benefits: ['Health Insurance', 'Remote Work'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-04-01'),
      remoteOption: true,
      industry: 'Technology',
      postedDate: new Date('2025-01-25'),
      responsibilities: ['Develop new features', 'Fix bugs'],
      keywords: ['web', 'developer', 'JavaScript'],
      contactEmail: 'careers@websolutions.com',
      applicationUrl: 'https://websolutions.com/jobs/7',
      companyLogoUrl: 'https://websolutions.com/logo.png',
    },
    {
      id: 8,
      title: 'QA Tester',
      company: 'TestMasters',
      location: 'Remote',
      description: 'Perform software testing and bug reporting.',
      employmentType: 'Part-time',
      requirements: ['Manual Testing', 'Automated Testing'],
      benefits: ['Health Insurance'],
      experienceLevel: 'Entry',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-02-25'),
      remoteOption: true,
      industry: 'Software Testing',
      postedDate: new Date('2025-01-28'),
      responsibilities: ['Write test cases', 'Execute tests'],
      keywords: ['quality', 'tester', 'QA'],
      contactEmail: 'jobs@testmasters.com',
      applicationUrl: 'https://testmasters.com/jobs/8',
      companyLogoUrl: 'https://testmasters.com/logo.png',
    },
    {
      id: 9,
      title: 'Network Engineer',
      company: 'NetworkSolutions',
      location: 'Seattle, WA',
      description: 'Design and maintain computer networks.',
      employmentType: 'Full-time',
      requirements: ['Networking', 'Cisco', 'TCP/IP'],
      benefits: ['401k', 'Health Insurance'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-03-20'),
      remoteOption: false,
      industry: 'Networking',
      postedDate: new Date('2025-01-12'),
      responsibilities: ['Configure routers', 'Monitor networks'],
      keywords: ['network', 'engineer', 'Cisco'],
      contactEmail: 'recruitment@networksolutions.com',
      applicationUrl: 'https://networksolutions.com/jobs/9',
      companyLogoUrl: 'https://networksolutions.com/logo.png',
    },
    {
      id: 10,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Austin, TX',
      description: 'Manage cloud infrastructure and deployment pipelines.',
      employmentType: 'Full-time',
      requirements: ['AWS', 'Docker', 'CI/CD'],
      benefits: ['Stock Options', 'Health Insurance'],
      experienceLevel: 'Senior',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-03-30'),
      remoteOption: true,
      industry: 'Cloud Computing',
      postedDate: new Date('2025-01-05'),
      responsibilities: ['Build automation pipelines', 'Monitor systems'],
      keywords: ['devops', 'cloud', 'infrastructure'],
      contactEmail: 'jobs@cloudtech.com',
      applicationUrl: 'https://cloudtech.com/jobs/10',
      companyLogoUrl: 'https://cloudtech.com/logo.png',
    },
    {
      id: 11,
      title: 'HR Manager',
      company: 'PeopleFirst',
      location: 'New York, NY',
      description: 'Manage recruitment and employee relations.',
      employmentType: 'Full-time',
      requirements: ['HR Software', 'Leadership', 'Conflict Resolution'],
      benefits: ['Paid Time Off', 'Health Insurance'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-03-10'),
      remoteOption: false,
      industry: 'Human Resources',
      postedDate: new Date('2025-01-18'),
      responsibilities: ['Recruit staff', 'Resolve conflicts'],
      keywords: ['HR', 'manager', 'recruitment'],
      contactEmail: 'hr@peoplefirst.com',
      applicationUrl: 'https://peoplefirst.com/jobs/11',
      companyLogoUrl: 'https://peoplefirst.com/logo.png',
    },
    {
      id: 12,
      title: 'Content Writer',
      company: 'ContentWorks',
      location: 'Remote',
      description: 'Write articles and blog posts for clients.',
      employmentType: 'Part-time',
      requirements: ['Writing', 'SEO', 'Content Management'],
      benefits: ['Paid Time Off'],
      experienceLevel: 'Entry',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-04-05'),
      remoteOption: true,
      industry: 'Content Creation',
      postedDate: new Date('2025-01-22'),
      responsibilities: ['Write blog posts', 'Conduct research'],
      keywords: ['content', 'writer', 'SEO'],
      contactEmail: 'careers@contentworks.com',
      applicationUrl: 'https://contentworks.com/jobs/12',
      companyLogoUrl: 'https://contentworks.com/logo.png',
    },
    {
      id: 13,
      title: 'Social Media Manager',
      company: 'BuzzMedia',
      location: 'Los Angeles, CA',
      description: 'Manage social media accounts and campaigns.',
      employmentType: 'Full-time',
      requirements: ['Social Media Marketing', 'Facebook Ads', 'Twitter'],
      benefits: ['Health Insurance', 'Paid Time Off'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-02-28'),
      remoteOption: false,
      industry: 'Marketing',
      postedDate: new Date('2025-01-19'),
      responsibilities: ['Create social media content', 'Analyze metrics'],
      keywords: ['social media', 'marketing', 'management'],
      contactEmail: 'hr@buzzmedia.com',
      applicationUrl: 'https://buzzmedia.com/jobs/13',
      companyLogoUrl: 'https://buzzmedia.com/logo.png',
    },
    {
      id: 14,
      title: 'Software Tester',
      company: 'TestPro',
      location: 'San Francisco, CA',
      description: 'Perform software testing and debugging.',
      employmentType: 'Contract',
      requirements: ['Manual Testing', 'Automation Testing'],
      benefits: [],
      experienceLevel: 'Entry',
      educationLevel: 'Associate Degree',
      applicationDeadline: new Date('2025-02-15'),
      remoteOption: true,
      industry: 'Software Testing',
      postedDate: new Date('2025-01-14'),
      responsibilities: ['Test software functionality', 'Report bugs'],
      keywords: ['software', 'tester', 'manual'],
      contactEmail: 'jobs@testpro.com',
      applicationUrl: 'https://testpro.com/jobs/14',
      companyLogoUrl: 'https://testpro.com/logo.png',
    },
    {
      id: 15,
      title: 'UX/UI Designer',
      company: 'DesignWorks',
      location: 'Austin, TX',
      description: 'Design user interfaces and enhance user experience.',
      employmentType: 'Full-time',
      requirements: ['Figma', 'Adobe XD', 'User Research'],
      benefits: ['Health Insurance', '401k'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-03-25'),
      remoteOption: false,
      industry: 'Design',
      postedDate: new Date('2025-01-21'),
      responsibilities: ['Design UI components', 'Conduct user testing'],
      keywords: ['UX', 'UI', 'designer'],
      contactEmail: 'careers@designworks.com',
      applicationUrl: 'https://designworks.com/jobs/15',
      companyLogoUrl: 'https://designworks.com/logo.png',
    },
    {
      id: 16,
      title: 'Financial Analyst',
      company: 'FinancePro',
      location: 'Chicago, IL',
      description: 'Analyze financial data and prepare reports.',
      employmentType: 'Full-time',
      requirements: ['Excel', 'Financial Modeling'],
      benefits: ['Health Insurance', 'Paid Time Off'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-04-10'),
      remoteOption: true,
      industry: 'Finance',
      postedDate: new Date('2025-01-15'),
      responsibilities: ['Prepare financial reports', 'Perform data analysis'],
      keywords: ['finance', 'analyst', 'Excel'],
      contactEmail: 'jobs@financepro.com',
      applicationUrl: 'https://financepro.com/jobs/16',
      companyLogoUrl: 'https://financepro.com/logo.png',
    },
    {
      id: 17,
      title: 'Sales Executive',
      company: 'SalesMasters',
      location: 'New York, NY',
      description: 'Sell products and services to clients.',
      employmentType: 'Full-time',
      requirements: ['Sales Experience', 'Negotiation Skills'],
      benefits: ['401k', 'Health Insurance'],
      experienceLevel: 'Mid',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-02-20'),
      remoteOption: false,
      industry: 'Sales',
      postedDate: new Date('2025-01-10'),
      responsibilities: ['Negotiate contracts', 'Generate leads'],
      keywords: ['sales', 'executive', 'negotiation'],
      contactEmail: 'careers@salesmasters.com',
      applicationUrl: 'https://salesmasters.com/jobs/17',
      companyLogoUrl: 'https://salesmasters.com/logo.png',
    },
    {
      id: 18,
      title: 'Database Administrator',
      company: 'DataSafe',
      location: 'San Francisco, CA',
      description: 'Maintain and optimize databases.',
      employmentType: 'Full-time',
      requirements: ['SQL', 'Database Management'],
      benefits: ['Health Insurance', 'Stock Options'],
      experienceLevel: 'Senior',
      educationLevel: 'Bachelor’s Degree',
      applicationDeadline: new Date('2025-03-05'),
      remoteOption: true,
      industry: 'Technology',
      postedDate: new Date('2025-01-14'),
      responsibilities: ['Optimize database performance', 'Ensure data security'],
      keywords: ['database', 'admin', 'SQL'],
      contactEmail: 'jobs@datasafe.com',
      applicationUrl: 'https://datasafe.com/jobs/18',
      companyLogoUrl: 'https://datasafe.com/logo.png',
    },
    {
      id: 19,
      title: 'Project Manager',
      company: 'ProjecTrek',
      location: 'Denver, CO',
      description: 'Manage project timelines and deliverables.',
      employmentType: 'Full-time',
      requirements: ['Project Management', 'Leadership'],
      benefits: ['Health Insurance', 'Paid Time Off'],
      experienceLevel: 'Mid',
      educationLevel: 'Master’s Degree',
      applicationDeadline: new Date('2025-04-15'),
      remoteOption: false,
      industry: 'Construction',
      postedDate: new Date('2025-01-09'),
      responsibilities: ['Oversee project execution', 'Manage team members'],
      keywords: ['project', 'manager', 'construction'],
      contactEmail: 'careers@projectrek.com',
      applicationUrl: 'https://projectrek.com/jobs/19',
      companyLogoUrl: 'https://projectrek.com/logo.png',
    },
    {
      id: 20,
      title: 'IT Support Specialist',
      company: 'TechHelp',
      location: 'Remote',
      description: 'Provide IT support and troubleshoot issues.',
      employmentType: 'Full-time',
      requirements: ['Troubleshooting', 'Customer Support'],
      benefits: ['Health Insurance', 'Flexible Hours'],
      experienceLevel: 'Entry',
      educationLevel: 'High School Diploma',
      applicationDeadline: new Date('2025-03-25'),
      remoteOption: true,
      industry: 'IT Support',
      postedDate: new Date('2025-01-30'),
      responsibilities: ['Provide tech support', 'Resolve customer issues'],
      keywords: ['IT', 'support', 'technical'],
      contactEmail: 'jobs@techhelp.com',
      applicationUrl: 'https://techhelp.com/jobs/20',
      companyLogoUrl: 'https://techhelp.com/logo.png',
    },
  ];*/

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/job-offer';
/*
  getJobOffers(): Observable<JobOffer[]> {
    return of(this.jobOffers.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()));
  }  
    */

  getJobOffers(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(this.apiUrl);
  }

  createJobOffer(jobOffer: JobOffer): Observable<JobOffer> {
    return this.http.post<JobOffer>(this.apiUrl, jobOffer);
  }


}
