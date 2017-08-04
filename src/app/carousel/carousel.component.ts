import { Component, Input } from '@angular/core';

export interface Slide {
    value: string;
    type: string;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class MyCarouselComponent {

    @Input() slides: Slide[] = [];

    activeSlideIndex = 0;

   slideChange () {
       console.log ('activeSlideIndex: ', this.activeSlideIndex);
   }
}
