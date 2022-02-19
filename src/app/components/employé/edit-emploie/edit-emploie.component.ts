import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-emploie",
  templateUrl: "./edit-emploie.component.html",
  styleUrls: ["./edit-emploie.component.css"],
})
export class EditEmploieComponent implements OnInit {
  constructor() {}

  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      nom: new FormControl(null, Validators.required),
      prenom: new FormControl(null, Validators.required),
      addresse: new FormControl(null, Validators.required),
      profession: new FormControl(null, Validators.required),
      cin: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required),
      conduit: new FormControl(null, Validators.required),
      remarque: new FormControl(null, Validators.required),

      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      //photo: string;
    });
  }
  clicksub() {
    console.log(this.form.value);
    this.form.reset();
  }
  get nom() {
    return this.form.get("nom");
  }

  get prenom() {
    return this.form.get("prenom");
  }

  get addresse() {
    return this.form.get("addresse");
  }
  get profession() {
    return this.form.get("profession");
  }

  get cin() {
    return this.form.get("cin");
  }
  get phone() {
    return this.form.get("phone");
  }

  get code() {
    return this.form.get("code");
  }
  get conduit() {
    return this.form.get("conduit");
  }

  get remarque() {
    return this.form.get("remarque");
  }
  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
