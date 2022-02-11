import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { RoleService } from "../../../services/role.service";
import { Role } from "../../../models/role.model";

@Component({
  selector: "app-add-role",
  templateUrl: "./add-role.component.html",
  styleUrls: ["./add-role.component.css"],
})
export class AddRoleComponent implements OnInit {
  constructor(private client: HttpClient, private router: Router) {}
  service = new RoleService(this.client);

  item = {} as Role;
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  clicksub() {
    console.log(this.form.value);
    this.form.reset();
  }
  get title() {
    return this.form.get("title");
  }

  get description() {
    return this.form.get("description");
  }

  submitHandler() {
    if (this.form.valid) {
      this.item.title = this.form.get("title").value;
      this.item.description = this.form.get("description").value;

      this.service.addRole(this.item).subscribe(
        (response) => {
          this.router.navigate(["roles/view"]);
        },
        (err) => {
          console.log(err.error);
        }
      );
      this.form.reset();
    }
  }
}
