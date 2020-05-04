import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {

  constructor() { }
  filterBy(items, filters) {
    let keys = Object.keys(filters);
    let filteredItems;
    if (keys.length >= 1) {
      filteredItems = this.filterByKey(items, keys, filters, 0);
      console.log(filteredItems);
      return filteredItems;
    }
    return items

  }
  filterByKey(items, keys, filters, i) {
    if (filters[keys[i]] !== "") {
      let filteredItems = items.filter(item => {
        let value = item[keys[i]];
        console.log(value);
        if (/^\d+$/.test(value)) {
          if (keys[i] === "zipcodeID") {
            return value === filters[keys[i]];
          }
          return value >= filters[keys[i]];
        }
        return value.toLowerCase() === filters[keys[i]];
      });

      if (keys[keys.length - 1] === keys[i]) {
        return filteredItems
      }
      return this.filterByKey(filteredItems, keys, filters, i + 1)
    } else {
      if (keys[keys.length - 1] === keys[i]) {
        return items
      }
      return this.filterByKey(items, keys, filters, i + 1)
    }

  }


}

