import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { PaginationService } from '../pagination.service';
import { SortingService } from '../sorting.service';
import { ActivatedRoute } from '@angular/router';
import { FilteringService } from '../filtering.service';


@Component({
  selector: 'app-home',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements AfterViewInit, OnInit {

  houses;
  paginatedHouses;
  pages;
  filteredHouses;
  pageNo = 1;
  type;
  status;
  loading = true;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 35.2206552;
  lng = -80.84569309999999;
  location = [[35.2206552, -80.84569309999999], [41.730610, -72.935242], [42.730610, -71.935242]]
  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(this.lat, this.lng),
    gestureHandling: 'greedy',
    zoom: 8
  };

  // marker = new google.maps.Marker({
  //   position: new google.maps.LatLng(this.lat, this.lng),
  //   icon: {
  //     url: 'assets/img/1.png',
  //     scaledSize: new google.maps.Size(30, 30),
  //   },
  //   map: this.map,
  // });


  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    for (let i of this.location) {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(i[0], i[1]),
        icon: {
          url: 'assets/img/1.png',
          scaledSize: new google.maps.Size(30, 30),
        },
        map: this.map,
      });
      marker.addListener('click', function () { alert("i got click") });
      marker.setMap(this.map);
    }
  }
  constructor(private http: HttpService, private pagination: PaginationService, private sorting: SortingService, private route: ActivatedRoute, private filtering: FilteringService) { }

  ngAfterViewInit() {
    this.mapInitializer();

  }
  ngOnInit() {
    this.http.getData().subscribe(data => {
      console.log("get data");
      this.houses = data;
      this.loading = false;
      this.route.queryParams.subscribe(x => {
        this.type = { type: (x.type) ? x.type : "" };
        this.status = { status: (x.status) ? x.status : "" };
        this.filteredHouses = this.filtering.filterBy(this.houses, x);
        this.filteredHouses = this.sorting.sortByZip(this.filteredHouses);
        this.init();
      });

    })


  }

  init() {
    this.paginatedHouses = this.pagination.paginate(1, this.filteredHouses);
    this.pages = this.pagination.getPages(this.filteredHouses);
  }

  next(e) {
    e.stopPropagation();
    let n = this.pagination.next(this.pageNo, this.filteredHouses);
    this.pageNo = n.pageNo;
    this.paginatedHouses = n.paginatedProducts;

  }
  prev(e) {
    e.stopPropagation();
    let n = this.pagination.prev(this.pageNo, this.filteredHouses);
    this.pageNo = n.pageNo;
    this.paginatedHouses = n.paginatedProducts;
  }
  paginate(e, page) {
    e.stopPropagation();
    this.paginatedHouses = this.pagination.paginate(page, this.filteredHouses);
    this.pageNo = page;
  }
  changeStatus(e) {
    this.status = { status: e.target.value };
    let keys = Object.assign({}, this.status, this.type);
    console.log(keys);
    this.filteredHouses = this.filtering.filterBy(this.houses, keys);
    this.pageNo = 1;
    this.init();


  }
  changeType(e) {
    this.type = { type: e.target.value };
    let keys = Object.assign({}, this.status, this.type)
    console.log(keys);
    this.filteredHouses = this.filtering.filterBy(this.houses, keys);
    this.pageNo = 1;
    this.init();
  }

  sort(e) {
    let value = e.target.value;
    if (value === "relevance") {
      this.filteredHouses = this.sorting.sortByZip(this.filteredHouses);
      this.init();
      return -1;
    }
    this.filteredHouses = this.sorting.sortBy(this.filteredHouses, e.target.value);
    this.init();
    return -1;
  }

}
