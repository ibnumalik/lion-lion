import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { storeFilter } from "./storeFilter";

@Component({
  selector: 'stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent{
  stores: any[];
  uniquePlaces: any[];
  places: any[];
  filteredPlaces = [];
  userFilter: storeFilter;
  userSortPreferences = 'name';
  sortOptions = [
    {name: 'Adress', value: 'adress'},
    {name: 'Name', value: 'name'},
    {name: 'Operation Hours', value: 'operation_hours'},
    {name: 'State', value: 'state'}
  ];

  constructor(private http: Http) {
    this.http.get('./assets/stores.json').subscribe(response => {
      this.stores = response.json();
      this.collectPlaces();
    });
    this.filterStoreStatus();
  }

  filterStoreStatus() {
    this.userFilter = {
      itemToFilter: 'status',
      filterRules: [true]
    }
  }

  collectPlaces() {
    this.uniquePlaces = Array.from(new Set(this.stores.map((store: any) => store.state)));
    this.places = this.uniquePlaces.map(place => {
      return {
        name: place,
        selected: false
      }
    });
  }

  filterStorePlace(place) {

    if (place.selected) {
      place.selected = false;
      let index = this.filteredPlaces.indexOf(place.name);
      this.filteredPlaces.splice(index, 1);

      if(this.filteredPlaces.length == 0) {
        this.filterStoreStatus();
        return;
      }
    } else {

      this.filteredPlaces.push(place.name);
      place.selected = true;
    }

    console.log(this.filteredPlaces);

    this.userFilter = {
      itemToFilter: 'state',
      filterRules: this.filteredPlaces
    };
  }
}
