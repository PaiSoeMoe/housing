import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-featured-property-section',
  templateUrl: './featured-property-section.component.html',
  styleUrls: ['./featured-property-section.component.scss']
})
export class FeaturedPropertySectionComponent implements OnInit {
  slideRate = 0;
  slider = "translateX(" + this.slideRate + "px)";
  properties;
  trnZero = false;
  // [{ img: "assets/img/gallery/1_0.jpg" }, { img: "assets/img/gallery/2_0.jpg" }, { img: "assets/img/gallery/3_0.jpg" },
  //   { img: "assets/img/gallery/1_0.jpg" }, { img: "assets/img/gallery/2_0.jpg" }, { img: "assets/img/gallery/3_0.jpg" }, { img: "assets/img/gallery/1_0.jpg" }]
  constructor(private http: HttpService) { }

  ngOnInit() {

    this.http.getData().subscribe((data) => {
      this.properties = data;
      this.properties = this.properties.filter((d) => {
        return d.status === "rent";
      }).slice(6, 9);
      this.properties = this.properties.concat(this.properties, this.properties[0]);
      setInterval(() => {
        this.next();
      }, 2000);
    })

  }


  next(e?) {
    if (e) {
      e.stopPropagation();
    }

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
