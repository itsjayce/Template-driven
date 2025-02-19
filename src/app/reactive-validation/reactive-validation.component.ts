import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, Form } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-reactive-validation',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-validation.component.html',
  styleUrl: './reactive-validation.component.css'
})
export class ReactiveValidationComponent {
loginForm: FormGroup;

constructor(){
  this.loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
}

onSubmit(){
  if (this.loginForm.valid){
    console.log("Form Submitted!", this.loginForm.value);
  
  } else{
    console.log("Form is not valid");
  }
}
}
