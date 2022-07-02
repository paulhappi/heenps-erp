import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  title = 'ng-carousel-demo';

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: false
  }

    slides = [
      {id: 1, img: "assets/img/carousel-1.jpg", text: "The Best Nursery and Primary School For Your Child"},
      {id: 2, img: "assets/img/carousel-2.jpg", text: ""},
      {id: 3, img: "assets/img/carousel-3.jpg", text: ""},
      {id: 4, img: "assets/img/carousel-4.jpg", text: ""},
      {id: 5, img: "assets/img/carousel-5.jpg", text: ""},
      {id: 6, img: "assets/img/carousel-6.jpg", text: ""},
      {id: 7, img: "assets/img/carousel-7.jpg", text: ""},
      {id: 8, img: "assets/img/carousel-8.jpg", text: ""}
    ];

}
