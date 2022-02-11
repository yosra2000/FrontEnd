import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { RoleService } from "../../../services/role.service";
import { Role } from "../../../models/role.model";

@Component({
  selector: "app-edit-role",
  templateUrl: "./edit-role.component.html",
  styleUrls: ["./edit-role.component.css"],
})
export class EditRoleComponent implements OnInit {
  constructor(
    private client: HttpClient,
    private router: Router,
    private ar: ActivatedRoute
  ) {}
  service = new RoleService(this.client);

  item = {} as Role;
  form: FormGroup;
  id: any;

  ngOnInit() {
    this.id = this.ar.snapshot.paramMap.get("id");

    this.service.getRoleById(this.id).subscribe((response) => {
      this.item = response

    });





    
    
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
    console.log(this.item)

    if (this.form.get("title").value) {
      this.item.title = this.form.get("title").value;
    }

    if (this.form.get("description").value) {
      this.item.description = this.form.get("description").value;
    }

      this.service.updateRole(this.item.id, this.item).subscribe(
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
