import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceElementsComponent } from './advance-elements.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {TagInputModule} from 'ngx-chips';
import {UiSwitchModule} from 'ng2-ui-switch/dist';
import {FormsModule} from '@angular/forms';

export const advanceElementRoutes: Routes = [
  {
    path: '',
    component: AdvanceElementsComponent,
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
    RouterModule.forChild(advanceElementRoutes),
    SharedModule,
    FormsModule,
    TagInputModule,
    UiSwitchModule
  ],
  declarations: [AdvanceElementsComponent]
})
export class AdvanceElementsModule { }
