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
    console.log(q);
    this.router.navigate(["/listing", q.value])
  }
}
