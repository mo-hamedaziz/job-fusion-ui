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
        console.log('Login successful', response);
        alert('Login successful!');
        
        // Store token or user info in localStorage or sessionStorage
        localStorage.setItem('authToken', response.token); // Assuming your backend returns a token
        
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Login failed. Please check your credentials and try again.');
      },
    });
  }

}
