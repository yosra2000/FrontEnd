import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../../models/user.model";
import { CondidatService } from "../../../services/condidat.service";
import { Condidat } from "../../../models/candidat.model";
@Component({
  selector: "app-view-condidat",
  templateUrl: "./view-condidat.component.html",
  styleUrls: ["./view-condidat.component.css"],
})
export class ViewCondidatComponent implements OnInit {
  constructor(private client: HttpClient) {}
  service = new CondidatService(this.client);

  condidats: Condidat[];
  searchText?: string = "";
  totalUsers?: number = 0;

  ngOnInit() {
    this.GetAll();
  }

  GetAll() {
    // Get Users From Api
    this.service.getCandidat().subscribe((data) => {
      console.log(data);
      this.condidats = data;
      console.log(data);

      // get total users
      /*this.totalUsers = this.users.length
			console.log(this.users)*/
    });
  }

  Search() {
    this.service.getCandidatsByKeyword(this.searchText).subscribe((data) => {
      this.condidats = data;
    });
  }

  Remove(item: User) {
    this.service.deleteCandidat(item.id).subscribe((response) => {
      this.GetAll();
    });
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
