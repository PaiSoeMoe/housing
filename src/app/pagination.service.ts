import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  paginate(pageNo, items) {
    let paginatedItems = items.slice((pageNo - 1) === 0 ? 0 : (((pageNo - 1) * 10)), ((pageNo * 10)));
    return paginatedItems
  }

  getPages(items) {
    let pages = Array.from({ length: Math.ceil(items.length / 10) }, (v, k) => k + 1);
    return pages
  }

  next(pageNo, items) {

    if (pageNo < this.getPages(items).length) {
      pageNo += 1
      let paginatedProducts = this.paginate(pageNo, items);
      return { pageNo, paginatedProducts }
    } else {
      return
    }
  }
  prev(pageNo, items) {

    if (pageNo > 1) {
      pageNo -= 1
      let paginatedProducts = this.paginate(pageNo, items);
      return { pageNo, paginatedProducts }
    } else {
      return
    }
  }

}
