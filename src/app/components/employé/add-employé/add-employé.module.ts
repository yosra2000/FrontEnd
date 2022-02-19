import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { AddEmployéComponent } from "./add-employé.component";

@NgModule({
  declarations: [AddEmployéComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AddEmployéComponent],
})
export class AddCondidatModule {}
