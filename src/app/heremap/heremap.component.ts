import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
@Component({
  selector: 'app-heremap',
  templateUrl: './heremap.component.html',
  styleUrls: ['./heremap.component.scss']
})
export class HeremapComponent implements AfterViewInit {
  
  constructor() { }

  ngAfterViewInit(): void {
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 16,
    center: latLng([ 46.879966, -121.726909 ])
  };

}
