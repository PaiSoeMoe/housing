import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-parallax',
  templateUrl: './hero-parallax.component.html',
  styleUrls: ['./hero-parallax.component.scss']
})
export class HeroParallaxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  findHouses(q) {
    let query = q.value;
    let defaultValues = ["Property Status", "Property Type", "Bed", "Bath"];
    let keys = Object.keys(query);
    for (let key of keys) {
      if (defaultValues.indexOf(query[key]) > -1) {
        query[key] = "";
      }
    }

    this.router.navigate(["/listing"], { queryParams: query })
  }
}


