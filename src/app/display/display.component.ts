import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayParagraph = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetails(){
    this.displayParagraph = !this.displayParagraph;
    // this.log.push(this.log.length +1);
    this.log.push(new Date());
  }

}
