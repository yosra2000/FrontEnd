import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-contrat",
  templateUrl: "./add-contrat.component.html",
  styleUrls: ["./add-contrat.component.css"],
})
export class AddContratComponent implements OnInit {
  constructor() {}

  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      salaire: new FormControl(null, Validators.required),
      prixheure: new FormControl(null, Validators.required),
      duree: new FormControl(null, Validators.required),
    });
  }

  clicksub() {
    console.log(this.form.value);
    this.form.reset();
  }
  get salaire() {
    return this.form.get("salaire");
  }

  get prixheure() {
    return this.form.get("prixheure");
  }

  get duree() {
    return this.form.get("durée");
  }
}
