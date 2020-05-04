import { Component, OnInit } from '@angular/core';
import { QuickViewService } from './quick-view.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'housing';

  constructor(public qvService: QuickViewService) {
  }
  ngOnInit() {
  }
  stop(e) {
    e.stopPropagation();
  }


}
