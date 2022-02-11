import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskingComponent } from './masking.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {FormsModule} from '@angular/forms';

export const maskingRoutes: Routes = [
  {
    path: '',
    component: MaskingComponent,
    data: {
      breadcrumb: 'Form Masking',
      icon: 'icofont-file-alt bg-c-lite-green',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(maskingRoutes),
    SharedModule,
    FormsModule,
    CurrencyMaskModule
  ],
  declarations: [MaskingComponent]
})
export class MaskingModule { }
