import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-rendez-vous",
  templateUrl: "./add-rendez-vous.component.html",
  styleUrls: ["./add-rendez-vous.component.css"],
})
export class AddRendezVousComponent implements OnInit {
  constructor() {}

  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      duree: new FormControl(null, Validators.required),
    });
  }

  clicksub() {
    console.log(this.form.value);
    this.form.reset();
  }

  get duree() {
    return this.form.get("durée");
  }
}
