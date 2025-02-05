import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signin(signinForm: NgForm) {
    if (signinForm.invalid) {
      return; // Prevent submission if the form is invalid
    }

    const credentials = {
      email: signinForm.value.email,
      password: signinForm.value.password,
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Full Login response:', response); // Debugging
    
        if (response?.message === 'Auhtentifcation failed') { 
          alert('Invalid credentials. Please try again.');
        } else if (response?.verified == false) {
          sessionStorage.setItem('email', credentials.email);
          sessionStorage.setItem('password', credentials.password);
          alert('Your account is not verified. Redirecting to verification page.');
          this.router.navigate(['/validation']);
        } else {
          alert('Login successful! Redirecting to welcome page.');
          this.router.navigate(['/welcome']);
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Please verify your credentials.');
      },
    });
    
}
}
