import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements AfterViewInit {
  
  constructor() { }

  ngAfterViewInit(): void {
  }
  options = {
    layers: [
      tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 4,
    center: latLng([ 46.879966, -121.726909 ])
  };

}
