import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-property-section',
  templateUrl: './featured-property-section.component.html',
  styleUrls: ['./featured-property-section.component.scss']
})
export class FeaturedPropertySectionComponent implements OnInit {
  slideRate = 0;
  slider = "translateX(" + this.slideRate + "px)";
  properties = [{ img: "assets/img/f1.webp" }, { img: "assets/img/f2.jpg" }, { img: "assets/img/f3.jpg" }, { img: "assets/img/f1.webp" }, { img: "assets/img/f2.jpg" }, { img: "assets/img/f3.jpg" }, { img: "assets/img/f1.webp" }]
  trnZero = false;
  constructor() { }

  ngOnInit() {
  }

  next(e) {
    e.stopPropagation();
    if (this.slideRate === -1005) {
      this.slideRate = 0;
      this.slider = "translateX(" + this.slideRate + "px)";
      this.trnZero = true;
      setTimeout(() => {
        this.trnZero = false;
        this.slideRate -= 335;
        this.slider = "translateX(" + this.slideRate + "px)";
      });
      return
    }

    this.slideRate -= 335;
    this.slider = "translateX(" + this.slideRate + "px)";
  }
  prev(e) {
    e.stopPropagation();
    if (this.slideRate === 0) {
      this.slideRate = -1005;
      this.slider = "translateX(" + this.slideRate + "px)";
      this.trnZero = true;
      setTimeout(() => {
        this.trnZero = false;
        this.slideRate += 335;
        this.slider = "translateX(" + this.slideRate + "px)";
      });
      return
    }
    this.slideRate += 335;
    this.slider = "translateX(" + this.slideRate + "px)";
  }
}
