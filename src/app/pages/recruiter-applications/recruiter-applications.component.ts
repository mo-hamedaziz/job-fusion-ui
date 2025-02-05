// recruiter-applications.component.ts
import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../../services/job-application.service';

interface JobApplication {
  id: string;
  username: string;  
  motivationParagraph?: string;
}

@Component({
  selector: 'app-recruiter-applications',
  templateUrl: './recruiter-applications.component.html',
  styleUrls: ['./recruiter-applications.component.css']
})
export class RecruiterApplicationsComponent /*implements OnInit*/ {




  applications: JobApplication[] = [
    {
      id: '1',
      username: 'JohnDoe123',
      motivationParagraph: 'I am passionate about software development and eager to contribute to your team.'
    },
    {
      id: '2',
      username: 'JaneSmith456',
      motivationParagraph: 'I have 5 years of experience in web development and am confident in my skills.'
    },
    {
      id: '3',
      username: 'BobJohnson789',
      motivationParagraph: 'My strong technical skills and passion for solving complex problems make me a great fit.'
    }
  ];

  /*
  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
    this.jobApplicationService.getPendingApplications().subscribe((data: any[]) => {
      this.applications = data.map((app) => ({
        id: app.id,
        username: app.user.name,  
        motivationParagraph: app.motivationParagraph
      }));
    });
  }*/
}
