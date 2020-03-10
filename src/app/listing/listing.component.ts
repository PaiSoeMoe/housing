import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements AfterViewInit, OnInit {

  houses;
  home = {
    price: 6175,
    bd: 2,
    ba: 2,
    sqft: 2417,
    location: "Novel Stonewall Station, UNIT 746, 400 E Stonewall St, Charlotte, NC 28202",
    description: "Wake up to what's next Novel Stonewall Station is where culture and comfort converge. Here, at the intersection of exclusivity and accessibility, is a celebration of the pathways that intersect in Charlotte's thriving city center: shopping, nightlife, food, entertainment, sports and, now, the pinnacle of the Uptown lifestyle. By LYNX, by bike or by foot, Novel Stonewall Station gives you access to the vibrant culture of Uptown with the comforts of everyday life in a way no other apartment community in Charlotte has before.",
    gallery: ["assets/img/1.webp", "assets/img/2.webp", "assets/img/3.webp", "assets/img/4.webp", "assets/img/5.webp"],
    type: "Apartment",
    rating: 4.6,
    features: {
      pets: "Cats,small",
      heating: "Contact manager",
      parking: " No Data",
      laundry: "Contact manager",
      pool: "yes",
      gym: "yes"
    }

  }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 35.2206552;
  lng = -80.84569309999999;
  location = [[35.2206552, -80.84569309999999], [41.730610, -72.935242], [42.730610, -71.935242]]
  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(this.lat, this.lng),
    gestureHandling: 'greedy',
    zoom: 8,
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
    console.log(this.gmap);
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
  constructor(private http: HttpService) { }

  ngAfterViewInit() {
    this.mapInitializer();

  }
  ngOnInit() {
    this.http.getData().subscribe(data => {
      this.houses = data;
    })
  }

}
