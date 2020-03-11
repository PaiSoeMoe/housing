import { Component, OnInit } from '@angular/core';

import { ShowMenuService } from '../show-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private showMenuService: ShowMenuService) { }

  ngOnInit() {
  }

  menuOn(e) {
    console.log("i am here")
    e.stopPropagation();
    this.showMenuService.menuOn();
  }

}
