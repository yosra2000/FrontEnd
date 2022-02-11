import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const TabsRoutes: Routes = [
  {
    path: '',
    component: TabsComponent,
    data: {
      breadcrumb: 'Tabs',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TabsRoutes),
    SharedModule
  ],
  declarations: [TabsComponent]
})
export class TabsModule { }
