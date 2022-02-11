import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicElementsComponent } from './basic-elements.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const basicElementRoutes: Routes = [
  {
    path: '',
    component: BasicElementsComponent,
    data: {
      breadcrumb: 'Form Components',
      icon: 'icofont-file-code bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(basicElementRoutes),
    SharedModule
  ],
  declarations: [BasicElementsComponent]
})
export class BasicElementsModule { }
