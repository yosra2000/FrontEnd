import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-vehicule",
  templateUrl: "./add-vehicule.component.html",
  styleUrls: ["./add-vehicule.component.css"],
})
export class AddVehiculeComponent implements OnInit {
  constructor() {}

  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      marque: new FormControl(null, Validators.required),
      matricule: new FormControl(null, Validators.required),
    });
  }

  clicksub() {
    console.log(this.form.value);
    this.form.reset();
  }
  get type() {
    return this.form.get("type");
  }

  get marque() {
    return this.form.get("marque");
  }

  get matricule() {
    return this.form.get("matricule");
  }
}
