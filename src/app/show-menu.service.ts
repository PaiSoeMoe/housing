import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowMenuService {
  menu

  constructor() { }
  menuOn() {
    this.menu = true;

  }
  menuOff() {
    this.menu = false;
  }
}
