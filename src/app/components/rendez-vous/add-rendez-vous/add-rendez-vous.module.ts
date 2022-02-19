import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { AddRendezVousComponent } from "./add-rendez-vous.component";

@NgModule({
  declarations: [AddRendezVousComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AddRendezVousComponent],
})
export class AddRendezVoustModule {}
