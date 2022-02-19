import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { EditEmploieComponent } from "./edit-emploie.component";

@NgModule({
  declarations: [EditEmploieComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [EditEmploieComponent],
})
export class EditEmploieModule {}
