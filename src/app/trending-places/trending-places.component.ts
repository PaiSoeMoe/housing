import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-places',
  templateUrl: './trending-places.component.html',
  styleUrls: ['./trending-places.component.scss']
})
export class TrendingPlacesComponent implements OnInit {
  obj = {
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

  tabs = [{
    name: "All Property", active: true, items: [{
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

    }, {
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

    }, {
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

    }]
  },
  {
    name: "For Sale", active: false, items: [{
      price: 6175,
      bd: 2,
      ba: 2,
      sqft: 2417,
      location: "hahahahahahah",
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

    }, {
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

    }, {
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

    }]
  },
  {
    name: "For Rent", active: false, items: [{
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

    }, {
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

    }, {
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

    }]
  }]

  constructor() { }

  ngOnInit() {
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
