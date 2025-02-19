import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TemplateDrivenComponent, ReactiveFormComponent, ReactiveValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finals-project';
}
