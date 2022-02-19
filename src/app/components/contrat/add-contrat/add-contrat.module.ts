import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { AddContratComponent } from "./add-contrat.component";

@NgModule({
  declarations: [AddContratComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AddContratComponent],
})
export class AddContratModule {}
