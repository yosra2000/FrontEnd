import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { RoleService } from "../../../services/role.service";
import { CondidatService } from "../../../services/condidat.service";
import { Condidat } from "../../../models/candidat.model";
import { PermisService } from "../../../services/permis.service";
import { Permis } from "../../../models/permis.model";
@Component({
  selector: "app-add-condidat",
  templateUrl: "./add-condidat.component.html",
  styleUrls: ["./add-condidat.component.css"],
})
export class AddCondidatComponent implements OnInit {
  constructor(private client: HttpClient, private router: Router) {}
  service = new CondidatService(this.client);
  servicePermis = new PermisService(this.client);

  item = {} as Condidat;
  form: FormGroup;
  /***********************/
  permisId?: any;
  permis?: Permis[];

  ngOnInit() {
    this.servicePermis.getPermis().subscribe((data) => {
      this.permis = data;
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

  onChangePermis($event: any) {
    this.servicePermis.getPermisById(this.permisId).subscribe((data) => {
      this.item.TypePermis = data;
    });
  }

  submitHandler() {
    if (this.form.valid) {
      this.item.nom = this.form.get("nom").value;
      this.item.prenom = this.form.get("prenom").value;
      this.item.addresse = this.form.get("addresse").value;
      this.item.profession = this.form.get("profession").value;
      this.item.cin = this.form.get("cin").value;
      this.item.phone = this.form.get("phone").value;
      this.item.code = this.form.get("code").value;
      this.item.conduit = this.form.get("conduit").value;
      this.item.remarque = this.form.get("remarque").value;
      this.item.email = this.form.get("email").value;

      this.service.addCandidat(this.item).subscribe(
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
}
