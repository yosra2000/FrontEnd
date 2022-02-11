import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role.model';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  constructor(private client: HttpClient, private router: Router,private ar: ActivatedRoute,
    ) {}
  service = new UserService(this.client);
  serviceRole = new RoleService(this.client);

  item = {} as User
  exform: FormGroup;
  id:any;
  roles?: Role[];
  roleId?: any;
  ngOnInit() {

    this.id = this.ar.snapshot.paramMap.get("id");
    this.service.getUserById(this.id).subscribe((response) => {
      this.item = response;
      this.serviceRole.getRoles().subscribe((data) => {
        this.roles = data;});})

    











    this.exform = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'fullname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
			'confirmPassword': new FormControl(null, [
				Validators.required,
				Validators.minLength(3),
			]),
  },
    this.pwdMatchValidator
  )};

  pwdMatchValidator(frm: FormGroup) {
		return frm.get('password').value === frm.get('confirmPassword').value
			? null
			: { mismatch: true }
	}
 
  onChangeRole($event: any) {
    this.serviceRole.getRoleById(this.roleId).subscribe((data) => {
      this.item.role = data;
    });
  } 




  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get username() {
    return this.exform.get('username');
  }
 
  get fullname() {
    return this.exform.get('fullname');
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
 
  submitHandler() {
        // this.item.photo = 'assets/images/avatar-4.jpg' // delete this
      if (this.exform.get('username').value){
        this.item.username = this.exform.get('username').value
       }
      if (this.exform.get('fullname').value)
       {
         
         this.item.fullname = this.exform.get('fullname').value
       }
       if (this.exform.get('email').value)
       {
         
         this.item.email = this.exform.get('email').value
       }
       if (this.exform.get('password').value)
       {

         this.item.password = this.exform.get('password').value
       }
  
        this.service.updateUser(this.item.id, this.item).subscribe(
          (response) => {
            this.router.navigate(["users/view"]);
          },
          (err) => {
            console.log(err.error);
          }
        );
        this.exform.reset();
      }
    }



