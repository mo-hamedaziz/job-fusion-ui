import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-page',
  templateUrl: './validation-page.component.html',
  styleUrls: ['./validation-page.component.css']
})
export class ValidationPageComponent {
  validationForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder) {
    this.validationForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }
  
  submitCode() {
    this.submitted = true;
    if (this.validationForm.valid) {
      console.log('Validation Code:', this.validationForm.value.code);
      // Handle API call to verify code
    }
  }
}
