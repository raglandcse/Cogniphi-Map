import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-wikimap',
  templateUrl: './wikimap.component.html',
  styleUrls: ['./wikimap.component.scss']
})
export class WikimapComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
  }
  options = {
    layers: [
      tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 16,
    center: latLng([ 46.879966, -121.726909 ])
  };

}