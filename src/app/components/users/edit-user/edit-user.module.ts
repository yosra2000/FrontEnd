import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { EditUserComponent } from "./edit-user.component";

@NgModule({
  declarations: [EditUserComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [EditUserComponent],
})
export class EditUserModule {}
