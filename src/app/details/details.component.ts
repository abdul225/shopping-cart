import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('slickModal', { static: true })
  slickModal!: SlickCarouselComponent;

  slides = [
    { img: "../../assets/images/color1.jpeg" },
    { img: "../../assets/images/color2.webp" },
    { img: "../../assets/images/color3.webp" },
    { img: "../../assets/images/color4.jpeg" },
  ];

  slideConfig = {
    "slidesToShow": 1, "slidesToScroll": 1, asNavFor: '.carousel',"autoplaySpeed": 2500,arrows: false,
  };
  slideConfig1 = {
    "slidesToShow": 3, "slidesToScroll": 1,prevArrow: false,
    nextArrow: false, "autoplay": false, asNavFor: '.carousel1',focusOnSelect: true,centerMode: true,vertical:true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false
        }
      }
    ]
  };

  order(){
    console.log("placing order");
    window.open('https://wa.me/918977161585?text=Hi%20Im%20interested%20in%20your%20product%20for%20sale', '_blank');
  }
}
