import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickViewService {
  quickViewOn = false;
  home;
  curLocation;

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

}
