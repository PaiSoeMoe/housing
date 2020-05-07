import { Component, OnInit, Input } from '@angular/core';
import { QuickViewService } from '../quick-view.service';

@Component({
  selector: 'app-feature-property-card',
  templateUrl: './feature-property-card.component.html',
  styleUrls: ['./feature-property-card.component.scss']
})
export class FeaturePropertyCardComponent implements OnInit {
  @Input("property") property;
  constructor(private qvService: QuickViewService) { }

  ngOnInit() {
  }

  qvOn(e, home) {
    e.stopPropagation();
    this.qvService.qvOn(home);

  }
}
