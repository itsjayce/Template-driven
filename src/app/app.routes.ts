import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

export const routes: Routes = [
    {path: 'template-driven', component: TemplateDrivenComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'reactive-validation', component: ReactiveValidationComponent},
];
