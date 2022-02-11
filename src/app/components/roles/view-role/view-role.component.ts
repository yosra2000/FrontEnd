import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { HttpClient } from "@angular/common/http";
import { Role } from '../../../models/role.model';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {


  constructor(private client: HttpClient) {}
  service = new RoleService(this.client);
  roles: Role[]
  searchText?: string = ''
  totalRole?: number = 0
  ngOnInit() {
    this.GetAll()
  }


  GetAll() {
    // Get Users From Api
    this.service.getRoles().subscribe((data) => {
      this.roles = data
  
      // get total users
      this.totalRole = this.roles.length
    })
  }

  Search() {
    this.service.getRolesByKeyword(this.searchText).subscribe((data) => {
      this.roles= data
    })
  }
  
  Remove(item: Role) {
    this.service.deleteRole(item.id).subscribe((response) => {
      this.GetAll()
    })
  }

}





