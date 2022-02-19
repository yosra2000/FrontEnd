import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { AddCondidatComponent } from "./add-condidat.component";

@NgModule({
  declarations: [AddCondidatComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AddCondidatComponent],
})
export class AddCondidatModule {}
