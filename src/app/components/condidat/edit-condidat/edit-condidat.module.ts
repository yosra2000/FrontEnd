import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { EditCondidatComponent } from "./edit-condidat.component";

@NgModule({
  declarations: [EditCondidatComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [EditCondidatComponent],
})
export class EditCondidatModule {}
