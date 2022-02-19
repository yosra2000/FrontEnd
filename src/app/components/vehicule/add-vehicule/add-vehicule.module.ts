import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { AddVehiculeComponent } from "./add-vehicule.component";

@NgModule({
  declarations: [AddVehiculeComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AddVehiculeComponent],
})
export class AddVehiculeModule {}
