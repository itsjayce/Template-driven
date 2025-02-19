import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  title = 'forma-app';
  name: string = '';
  phone: string = '';
  email: string = '';
  message: string = '';
  formData: FormGroup = new FormGroup({
    name: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    message: new FormControl("")
  })

  onClickSubmit(data: {name: string, phone: string, email: string, message: string}) {
    this.name = data.name,
    this.email = data.email,
    this.phone = data.phone,
    this.message = data.message
  }
}
