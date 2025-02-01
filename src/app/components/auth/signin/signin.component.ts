import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signin(signinForm: NgForm) {
      if (signinForm.valid) {
        console.log('Form Data:', signinForm.value);
      }
    }

}
