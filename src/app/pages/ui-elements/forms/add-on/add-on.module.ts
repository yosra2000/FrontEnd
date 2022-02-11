import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOnComponent } from './add-on.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const addOnRoutes: Routes = [
  {
    path: '',
    component: AddOnComponent,
    data: {
      breadcrumb: 'Form Elements Add-On',
      icon: 'icofont-file-code bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(addOnRoutes),
    SharedModule
  ],
  declarations: [AddOnComponent]
})
export class AddOnModule { }
