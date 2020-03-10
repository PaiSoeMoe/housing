import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-property-card',
  templateUrl: './feature-property-card.component.html',
  styleUrls: ['./feature-property-card.component.scss']
})
export class FeaturePropertyCardComponent implements OnInit {
  @Input("property") property;
  constructor() { }

  ngOnInit() {
  }

}
