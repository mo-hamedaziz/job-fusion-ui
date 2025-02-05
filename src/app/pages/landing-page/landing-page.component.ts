import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  
  constructor(private router: Router){}
  getStarted() {
    alert('Welcome! Let’s get started. Join the family');
    this.router.navigate(['/signup']);

  }
}
