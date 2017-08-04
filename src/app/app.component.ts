import { Component, OnInit } from '@angular/core';

import { Slide } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    headers: Slide[] = [];
    images: Slide[] = [];
    text: Slide[] = [];

  ngOnInit() {
    this.headers = [{
      type: 'HEADER',
      value: 'Ferrets'
    }, {
      type: 'HEADER',
      value: 'Dogs'
    }, {
      type: 'HEADER',
      value: 'Cats'
    }, {
      type: 'HEADER',
      value: 'Parrots'
    }];
  }
}
