import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MyCarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
