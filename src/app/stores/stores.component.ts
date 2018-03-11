import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent{
  stores: any[];
  places: any[];
  userFilter: Object;

  constructor(private http: Http) {
    this.http.get('./assets/stores.json').subscribe(response => {
      this.stores = response.json();
      this.collectPlaces();
    });

    this.userFilter = {
      itemToFilter: 'status',
      filterRule: true
    }
  }

  collectPlaces() {
    this.places = Array.from(new Set(this.stores.map((store: any) => store.state)));
  }

  filterStorePlace(place) {
    this.userFilter = {
      itemToFilter: 'state',
      filterRule: place
    };
  }
}
