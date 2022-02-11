import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-elements',
  templateUrl: './advance-elements.component.html',
  styleUrls: ['./advance-elements.component.css']
})
export class AdvanceElementsComponent implements OnInit {
  switchDisable = true;
  items = ['Amsterdam', 'Washington', 'Sydney'];
  items1 = ['Amsterdam', 'Washington', 'Sydney'];
  items2 = ['Amsterdam', 'Washington', 'Sydney'];
  items3 = ['Amsterdam', 'Washington', 'Sydney'];

  constructor() { }

  ngOnInit() {
  }

  disableSwitch() {
    this.switchDisable = true;
  }

  enableSwitch() {
    this.switchDisable = false;
  }

}
