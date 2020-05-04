import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickViewService {
  quickViewOn = false;
  home;
  curPhoto;
  curLocation;
  sliderWrap = false;
  photoInd = 0;

  constructor() { }



  qvOn(home) {
    this.home = home;
    this.quickViewOn = true;
    this.curLocation = window.pageYOffset;
    window.scroll(0, 0);
  }

  qvOff() {
    this.quickViewOn = false;

    setTimeout(() => { window.scroll(0, this.curLocation) }, 0)
  }

  sliderOn(n) {
    this.sliderWrap = true;
    this.photoInd = n;
    this.curPhoto = this.home.gallery[n];
    setTimeout(() => { window.scroll(0, 0) }, 0)
  }

  sliderOff() {
    this.sliderWrap = false;
  }

  next(e) {
    e.stopPropagation();
    if (this.photoInd < this.home.gallery.length - 1) {
      this.photoInd += 1;
      this.curPhoto = this.home.gallery[this.photoInd];
    } else {
      this.photoInd = 0;
      this.curPhoto = this.home.gallery[this.photoInd];
    }
  }
  prev(e) {
    e.stopPropagation();
    if (this.photoInd > 0) {
      this.photoInd -= 1;
      this.curPhoto = this.home.gallery[this.photoInd];
    } else {
      this.photoInd = this.home.gallery.length - 1;
      this.curPhoto = this.home.gallery[this.photoInd];
    }
  }

}
