import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

import { CondidatService } from "../../../services/condidat.service";
import { Condidat } from "../../../models/candidat.model";
import { Permis } from "../../../models/permis.model";
import { PermisService } from "../../../services/permis.service";
@Component({
  selector: "app-edit-condidat",
  templateUrl: "./edit-condidat.component.html",
  styleUrls: ["./edit-condidat.component.css"],
})
export class EditCondidatComponent implements OnInit {
  constructor(
    private client: HttpClient,
    private router: Router,
    private ar: ActivatedRoute
  ) {}
  service = new CondidatService(this.client);
  servicePermis = new PermisService(this.client);

  item = {} as Condidat;
  form: FormGroup;
  id: any;
  permis?: Permis[];
  permisId?: any;
  ngOnInit() {
    this.id = this.ar.snapshot.paramMap.get("id");

    this.service.getCandidatById(this.id).subscribe((response) => {
      this.item = response;
      this.servicePermis.getPermis().subscribe((data) => {
        this.permis = data;
      });
    });

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
      //photo: string;
    });
  }

  onChangePermis($event: any) {
    this.servicePermis.getPermisById(this.permisId).subscribe((data) => {
      this.item.TypePermis = data;
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

  submitHandler() {
    if (this.form.get("nom").value) {
      this.item.nom = this.form.get("nom").value;
    }
    if (this.form.get("prenom").value) {
      this.item.prenom = this.form.get("prenom").value;
    }

    if (this.form.get("addresse").value) {
      this.item.addresse = this.form.get("addresse").value;
    }
    if (this.form.get("profession").value) {
      this.item.profession = this.form.get("profession").value;
    }
    if (this.form.get("cin").value) {
      this.item.cin = this.form.get("cin").value;
    }

    if (this.form.get("phone").value) {
      this.item.phone = this.form.get("phone").value;
    }

    if (this.form.get("code").value) {
      this.item.code = this.form.get("code").value;
    }

    if (this.form.get("conduit").value) {
      this.item.conduit = this.form.get("conduit").value;
    }
    if (this.form.get("remarque").value) {
      this.item.remarque = this.form.get("remarque").value;
    }
    if (this.form.get("email").value) {
      this.item.email = this.form.get("email").value;
    }
    this.service.updateCandidat(this.item.id, this.item).subscribe(
      (response) => {
        this.router.navigate(["condidat/view"]);
      },
      (err) => {
        console.log(err.error);
      }
    );
    this.form.reset();
  }
}
