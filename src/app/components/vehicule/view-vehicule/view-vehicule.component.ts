import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-vehicule",
  templateUrl: "./view-vehicule.component.html",
  styleUrls: ["./view-vehicule.component.css"],
})
export class ViewVehiculeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openMyModal(event) {
    document.querySelector("#" + event).classList.add("md-show");
  }

  closeMyModal(event) {
    event.target.parentElement.parentElement.parentElement.classList.remove(
      "md-show"
    );
  }
}
