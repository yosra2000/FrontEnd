import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { EditContratComponent } from "./edit-contrat.component";

@NgModule({
  declarations: [EditContratComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [EditContratComponent],
})
export class EditContratModule {}
