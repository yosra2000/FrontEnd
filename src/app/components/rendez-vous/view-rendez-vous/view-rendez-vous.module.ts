import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { ViewRendezVousComponent } from "./view-rendez-vous.component";

@NgModule({
  declarations: [ViewRendezVousComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [ViewRendezVousComponent],
})
export class ViewRendezVousModule {}
