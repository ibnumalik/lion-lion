import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storeFilter'
})
export class StoreFilterPipe implements PipeTransform {

  transform(stores: any[], filter): any {
    let itemToFilter = filter.itemToFilter;
    let filterRules: any[] = filter.filterRules;
    let filteredStores = [];

    if (!stores || !filter) {
      return stores;
    }

    stores.filter(store => {
      filterRules.forEach(rule => {
        if(store[itemToFilter] === rule && store.status) {
          filteredStores.push(store);
        }
      })
    });
    return filteredStores;
  }

}
