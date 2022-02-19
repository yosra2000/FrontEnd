import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-employé",
  templateUrl: "./view-employé.component.html",
  styleUrls: ["./view-employé.component.css"],
})
export class ViewEmployéComponent implements OnInit {
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
