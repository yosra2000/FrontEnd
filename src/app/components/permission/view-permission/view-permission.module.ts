import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import {TagInputModule} from 'ngx-chips';
import {UiSwitchModule} from 'ng2-ui-switch/dist';
import {FormsModule} from '@angular/forms';
import { ViewPermissionComponent } from './view-permission.component';

export const advanceElementRoutes: Routes = [
  {
    path: '',
    component: ViewPermissionComponent,
    data: {
      breadcrumb: 'Form Elements Advance',
      icon: 'icofont-file-code bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    UiSwitchModule
  ],
  declarations: [ViewPermissionComponent]
})
export class ViewPermissionModule { }
