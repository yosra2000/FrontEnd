import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { User } from "../../../models/user.model";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private client: HttpClient) {}
  service = new UserService(this.client);

  users: User[]
  searchText?: string = ''
  totalUsers?: number = 0

  ngOnInit() {
		this.GetAll()

	}

  GetAll() {
		// Get Users From Api
		this.service.getUsers().subscribe((data) => {
			console.log(data)
			this.users = data;
			console.log(data)
   
			// get total users
			/*this.totalUsers = this.users.length
			console.log(this.users)*/

		})
	}

  Search() {
		this.service.getUsersByKeyword(this.searchText).subscribe((data) => {
			this.users = data
		})
	}

  Remove(item: User) {
		this.service.deleteUser(item.id).subscribe((response) => {
			this.GetAll()
		})
	}

} 
