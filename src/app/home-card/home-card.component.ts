import { Component, OnInit, Input } from '@angular/core';
import { QuickViewService } from '../quick-view.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  @Input("home") home

  constructor(private qvService: QuickViewService) { }

  ngOnInit() {
  }
  qvOn(e, home) {
    e.stopPropagation();
    this.qvService.qvOn(home);

  }

}
