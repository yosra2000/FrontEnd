import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {SelectOptionService} from '../../../../shared/element/select-option.service';
import {SelectModule} from 'ng-select';
import {FormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {HttpModule} from '@angular/http';

export const selectRoutes: Routes = [
  {
    path: '',
    component: SelectComponent,
    data: {
      breadcrumb: 'Form Select',
      icon: 'icofont-file-alt bg-c-yellow',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(selectRoutes),
    SharedModule,
    FormsModule,
    SelectModule,
    TagInputModule,
    HttpModule
  ],
  declarations: [SelectComponent],
  providers: [SelectOptionService]
})
export class SelectFormModule { }
