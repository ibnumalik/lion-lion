import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent{
  stores: any[];
  uniquePlaces: any[];
  places: any[];
  userFilter: Object;

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
      filterRule: true
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
      this.filterStoreStatus();
      return;
    }

    for (let i = 0; i < this.places.length; i++) {
      const _place = this.places[i];
      _place.selected = false;
    }

    place.selected = true;
    this.userFilter = {
      itemToFilter: 'state',
      filterRule: place.name
    };
  }
}
