import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(stores: any[], sortby): any {
    if (!stores || !sortby) {
      return stores;
    }

    stores.sort((a, b) => {
      if(a[sortby] < b[sortby]) {
        return -1;
      } else if (a[sortby] > b[sortby]) {
        return 1;
      } else {
        return 0;
      }
    });
    return stores;
  }

}
