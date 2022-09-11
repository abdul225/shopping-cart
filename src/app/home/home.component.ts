import { LoginService } from './../login.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showLogin: boolean = false;
  constructor(private router: Router, public loginService: LoginService,public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  @ViewChild('slickModal', { static: true })
  slickModal!: SlickCarouselComponent;
  @ViewChild('slickModal1', { static: true })
  slickModal1!: SlickCarouselComponent;
  slides = [
    { img: "https://dummyimage.com/350x150/2a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/1a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/7a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/9a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/5a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/4a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/423b42/fff" },
    { img: "https://dummyimage.com/350x150/2a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/1a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/7a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/9a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/5a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/4a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/2a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/1a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/7a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/9a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/5a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/4a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/2a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/1a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/7a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/9a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/5a2b7a/fff" },
    { img: "https://dummyimage.com/350x150/4a2b7a/fff" },
  ];
  slides1 = [
    { img: "../../assets/images/dress1.png",
      altImg: "assets/images/dress1.png"},
    { img: "../../assets/images/dress2.jpeg",
      altImg: "./assets/images/dress2.jpeg" },
    { img: "../../assets/images/dress3.jpeg",
      altImg: "assets/images/dress3.jpeg" },
    { img: "../../assets/images/dress4.jpeg",
      altImg: "assets/images/dress4.jpeg" },
    { img: "../../assets/images/dress5.jpeg",
      altImg: "assets/images/dress5.jpeg" },
    { img: "../../assets/images/dress6.jpeg",
      altImg: "assets/images/dress6.jpeg" },
    { img: "../../assets/images/dress7.jpeg",
      altImg: "assets/images/dress7.jpeg" },
    { img: "../../assets/images/dress8.jpeg",
      altImg: "assets/images/dress8.jpeg" },
    { img: "../../assets/images/dress9.jpeg",
      altImg: "assets/images/dress9.jpeg" },
    { img: "../../assets/images/dress10.jpeg",
      altImg: "assets/images/dress10.jpeg" },
    { img: "../../assets/images/dress11.jpeg",
      altImg: "assets/images/dress11.jpeg" },
    { img: "../../assets/images/dress12.jpeg",
      altImg: "assets/images/dress12.jpeg" },
    { img: "../../assets/images/dress13.jpeg",
      altImg: "assets/images/dress13.jpeg" },
    { img: "../../assets/images/dress14.jpeg",
      altImg: "assets/images/dress14.jpeg" },
    { img: "../../assets/images/dress15.jpeg",
      altImg: "assets/images/dress15.jpeg" },
    { img: "../../assets/images/dress16.jpeg",
      altImg: "assets/images/dress16.jpeg" },
    { img: "../../assets/images/dress17.jpeg",
      altImg: "assets/images/dress17.jpeg" },
    { img: "../../assets/images/dress18.jpeg",
      altImg: "assets/images/dress18.jpeg" },
  ];
  slideConfig = {
    "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true, autoplay: true, autoplaySpeed: 2500,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true, autoplay: true, autoplaySpeed: 2000,
          dots: false,
          prevArrow: false,
          nextArrow: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, autoplaySpeed: 2000,
          dots: false,
          prevArrow: false,
          nextArrow: false
        }
      }
    ]
  };
  slideConfig1 = {
    "slidesToShow": 8, "slidesToScroll": 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
        }
      }
    ]
  };

  playVideo() {
    if (this.loginService.getIsLoggedIn()) {
      this.router.navigate(['videos']);
    }
    else {
      const dialogRef = this.dialog.open(LoginComponent,{panelClass: ['slide-animation']});
      //this.loginService.showLoginValue = true;
    }
  }

  receiveLogin(islogin: boolean) {
    this.playVideo();
  }
  getStarted(){
    const dialogRef = this.dialog.open(LoginComponent,{panelClass: ['slide-animation']});
  }
}
