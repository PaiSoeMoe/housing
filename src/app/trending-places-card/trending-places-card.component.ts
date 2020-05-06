import { Component, OnInit, Input } from '@angular/core';
import { QuickViewService } from '../quick-view.service';

@Component({
  selector: 'app-trending-places-card',
  templateUrl: './trending-places-card.component.html',
  styleUrls: ['./trending-places-card.component.scss']
})
export class TrendingPlacesCardComponent implements OnInit {

  @Input('home') home

  constructor(private qvService: QuickViewService) { }

  ngOnInit() {
  }

  qvOn(e, home) {
    e.stopPropagation();
    this.qvService.qvOn(home);

  }

}
