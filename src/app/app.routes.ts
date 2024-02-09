import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { ResumesComponent } from './resumes/resumes.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent, title: 'Cadastrar' },
  { path: 'resumes', component: ResumesComponent },
];
