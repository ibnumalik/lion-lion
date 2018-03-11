import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storeFilter'
})
export class StoreFilterPipe implements PipeTransform {

  transform(stores: any[], filter): any {
    let itemToFilter = filter.itemToFilter;
    let filterRule = filter.filterRule;

    if (!stores || !filter) {
      return stores;
    }

    return stores.filter(store => {
      return store[itemToFilter] === filterRule
    });
  }

}
