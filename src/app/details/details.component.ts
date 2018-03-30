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
  clicks = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    ((this.showDetails) ? this.showDetails = false : this.showDetails = true);

    this.clicks++;
    console.log(this.clicks);
  }

  getStyleDetails() {
		return this.clicks >= 5 ? 'blue' : '';
	}

}
