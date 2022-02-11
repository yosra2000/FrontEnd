import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from "../../../models/user.model";
import { UserService } from "../../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private client: HttpClient, private router: Router) {}
  service = new UserService(this.client);
   serviceRole = new RoleService(this.client);

  item = {} as User
  exform: FormGroup;

///////////////////////////////////////////////
 roles?: Role[];
 roleId?: any;





  ngOnInit() {

    this.serviceRole.getRoles().subscribe((data) => {
      this.roles = data; 
    });

    this.exform = new FormGroup({
      'Username' : new FormControl(null, Validators.required),
      'FullName' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
			'confirmPassword': new FormControl(null, [
				Validators.required,
				Validators.minLength(3),
			]),
  },
   this.pwdMatchValidator ,



  )};

  pwdMatchValidator(frm: FormGroup) {
		return frm.get('password').value === frm.get('confirmPassword').value
			? null
			: { mismatch: true }
	}

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get Username() {
    return this.exform.get('Username');
  }
 
  get FullName() {
    return this.exform.get('FullName');
  }
  get City() {
    return this.exform.get('City');
  }
  get Address() {
    return this.exform.get('Address');
  }
   get email() {
    return this.exform.get('email');
  }
  get password() {
    return this.exform.get('password');
  }
   get confirmPassword() {
    return this.exform.get('confirmPassword');
  }
 



  onChangeRole($event: any) {

    this.serviceRole.getRoleById(this.roleId).subscribe((data) => {
      this.item.role= data;
    });
  }
  
  submitHandler() {
    if (this.exform.valid) {
        this.item.photo = 'assets/images/avatar-4.jpg' // delete this

        this.item.username = this.exform.get('Username').value
        this.item.fullname = this.exform.get('FullName').value
        this.item.email = this.exform.get('email').value
        this.item.password = this.exform.get('password').value
  
        this.service.addUser(this.item).subscribe(
          (response) => {
            this.router.navigate(['users/view'])
          },
          (err) => {
            console.log(err.error)
          }
        )

  
        this.exform.reset()

      }
    }
  

}

