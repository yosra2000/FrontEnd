import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const formValidationRoutes: Routes = [
  {
    path: '',
    component: FormValidationComponent,
    data: {
      breadcrumb: 'Form Validation',
      icon: 'icofont-file-code bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(formValidationRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormValidationComponent]
})
export class FormValidationModule { }
