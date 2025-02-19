import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  title = 'template-form-app';
  name: string = '';
  phone: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

onSubmit() {
  this.submitted = true;
}
}
