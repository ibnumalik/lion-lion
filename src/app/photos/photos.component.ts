import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos = [
    {id: 1, name: "First", src: "https://source.unsplash.com/random?r=1"},
    {id: 2, name: "Second", src: "https://source.unsplash.com/random?r=2"},
    {id: 3, name: "Third", src: "https://source.unsplash.com/random?r=3"},
    {id: 4, name: "Four", src: "https://source.unsplash.com/random?r=4"},
    {id: 5, name: "Five", src: "https://source.unsplash.com/random?r=5"},
    {id: 6, name: "Six", src: "https://source.unsplash.com/random?r=6"},
    {id: 7, name: "Seven", src: "https://source.unsplash.com/random?r=7"},
    {id: 8, name: "Eight", src: "https://source.unsplash.com/random?r=8"},
    {id: 9, name: "Nine", src: "https://source.unsplash.com/random?r=9"},
    {id: 10, name: "Ten", src: "https://source.unsplash.com/random?r=10"},
  ];
  activeSliderId;

  cycleToSlide(photo) {
    let slideId = photo.id-1;

    this.activeSliderId = "ngb-slide-" + slideId;
  }

}
