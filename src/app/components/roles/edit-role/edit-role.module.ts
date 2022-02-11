import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { EditRoleComponent } from './edit-role.component';

@NgModule({
  declarations: [
    EditRoleComponent  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ EditRoleComponent]
})

export class EditRoleModule { }