import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  signup(signupForm: NgForm) {
    if (signupForm.invalid) {
      return;
    }

    const user = {
      username: signupForm.value.username,
      firstname: signupForm.value.firstname,
      lastname: signupForm.value.lastname,
      email: signupForm.value.email,
      password: signupForm.value.password,
      role: signupForm.value.role,
    };

    this.authService.signup(user).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        alert('Signup successful!'); // Optional: Navigate to login or dashboard
      },
      error: (error) => {
        console.error('Signup failed', error);
        alert('Signup failed. Please try again.');
      },
    });
  }
  

}
