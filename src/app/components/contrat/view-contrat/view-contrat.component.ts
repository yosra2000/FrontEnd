import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-contrat",
  templateUrl: "./view-contrat.component.html",
  styleUrls: ["./view-contrat.component.css"],
})
export class ViewContratComponent implements OnInit {
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
