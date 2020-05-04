import { Injectable } from '@angular/core';
import { orderBy } from "lodash";

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }
  sortBy(items, order) {
    return orderBy(items, 'price', order);
  }
  sortByZip(items) {
    return orderBy(items, 'zipcodeID');
  }
}
