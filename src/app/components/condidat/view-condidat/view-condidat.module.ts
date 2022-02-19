import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { ViewCondidatComponent } from "./view-condidat.component";

@NgModule({
  declarations: [ViewCondidatComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [ViewCondidatComponent],
})
export class ViewCondidatModule {}
