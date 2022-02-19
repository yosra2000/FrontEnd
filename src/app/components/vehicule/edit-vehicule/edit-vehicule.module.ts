import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { EditVehiculeComponent } from "./edit-vehicule.component";

@NgModule({
  declarations: [EditVehiculeComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [EditVehiculeComponent],
})
export class EditVehiculeModule {}
