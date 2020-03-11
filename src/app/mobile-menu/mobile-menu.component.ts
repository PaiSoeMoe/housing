import { Component, OnInit } from '@angular/core';
import { ShowMenuService } from '../show-menu.service';


@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor(public showMenu: ShowMenuService) { }

  ngOnInit() {

  }
  menuOff(e) {
    e.stopPropagation();
    this.showMenu.menuOff();
  }

}
