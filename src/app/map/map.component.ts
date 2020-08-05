import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  
  constructor() { }

  ngAfterViewInit(): void {
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 16,
    center: latLng([ 46.879966, -121.726909 ])
  };

}