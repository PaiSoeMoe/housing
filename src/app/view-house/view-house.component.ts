import { Component, OnInit } from '@angular/core';
import { QuickViewService } from '../quick-view.service';

@Component({
  selector: 'app-view-house',
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.scss']
})
export class ViewHouseComponent implements OnInit {

  constructor(public qvService: QuickViewService) { }

  ngOnInit() {
  }

}
