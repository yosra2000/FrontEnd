import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.css']
})
export class KnobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dial').knob({
      draw: function() {
        if (this.$.data('skin') === 'tron') {
          this.cursorExt = 0.3;
          const a = this.arc(this.cv);
          let pa;
          const r = 1;
          this.g.lineWidth = this.lineWidth;
          if (this.o.displayPrevious) {
            pa = this.arc(this.v);
            this.g.beginPath();
            this.g.strokeStyle = this.pColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
            this.g.stroke();
          }
          this.g.beginPath();
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
          this.g.stroke();
          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();
          return false;
        }
      }
    });
  }

}
