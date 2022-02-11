import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent } from './picker.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {ColorPickerModule} from 'ngx-color-picker';
import {FormsModule} from '@angular/forms';
import {DatepickerModule} from 'angular2-material-datepicker';

export const pickerRoutes: Routes = [
  {
    path: '',
    component: PickerComponent,
    data: {
      breadcrumb: 'Form Picker',
      icon: 'icofont-ui-calendar bg-c-pink',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pickerRoutes),
    SharedModule,
    FormsModule,
    ColorPickerModule,
    DatepickerModule
  ],
  declarations: [PickerComponent]
})
export class PickerModule { }
