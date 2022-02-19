import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-view-rendez-vous",
  templateUrl: "./view-rendez-vous.component.html",
  styleUrls: ["./view-rendez-vous.component.css"],
})
export class ViewRendezVousComponent implements OnInit {
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

  openMyModal(event) {
    document.querySelector("#" + event).classList.add("md-show");
  }

  closeMyModal(event) {
    event.target.parentElement.parentElement.parentElement.classList.remove(
      "md-show"
    );
  }
}
