import {Component, Input, OnInit} from '@angular/core';
import {GoogleMap, MapMarker} from "@angular/google-maps";

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [
    GoogleMap,
    MapMarker
  ],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent implements OnInit{
  @Input() latitude!: number;
  @Input() longitude!: number;

  mapOptions: google.maps.MapOptions = {
    zoom : 16,
    disableDefaultUI: true
  }

  marker = {
    position: { lat: 0, lng: 0 }
  };

  ngOnInit() {
    this.mapOptions.center = { lat: this.latitude, lng: this.longitude };
    this.marker = { position: { lat: this.latitude, lng: this.longitude }}
  }

  }
