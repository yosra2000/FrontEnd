import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AddRoleComponent } from './add-role.component';

@NgModule({
  declarations: [
    AddRoleComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AddRoleComponent]
})
export class AddRoleModule { }