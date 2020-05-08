import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-trending-places',
  templateUrl: './trending-places.component.html',
  styleUrls: ['./trending-places.component.scss']
})
export class TrendingPlacesComponent implements OnInit {
  data;
  loading = true;
  tabs = [
    {
      name: "All Property", active: true, items: []
    },
    {
      name: "For Sale", active: false, items: []
    },
    {
      name: "For Rent", active: false, items: []
    }]

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getData().subscribe((data) => {
      this.data = data
      this.loading = false;
      this.tabs[0].items = this.data.slice(0, 3);
      this.tabs[1].items = this.data.filter((d) => {
        return d.status === "sale"
      }).slice(3, 6);
      this.tabs[2].items = this.data.filter((d) => {
        return d.status === "rent"
      }).slice(0, 3);
    })
  }

  changeTab(e, n) {
    e.stopPropagation();
    this.tabs.map(tab => {
      if (tab.name === n) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    })
  }

}
