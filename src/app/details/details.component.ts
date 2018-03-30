import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  styles: [`
  .display-active { color: white; }
    `
  ]

})
export class DetailsComponent implements OnInit {

  showDetails = false;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }

}
