import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullscreenContainerComponent } from "./fullscreen-container/fullscreen-container.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgForOf } from "@angular/common";
import { PropertyListingComponent } from "./property-listing/property-listing.component";
import { Property } from "./models/property";
import { PropertyService } from "./services/property.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FullscreenContainerComponent, NavbarComponent, NgForOf, PropertyListingComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PropertyService]
})
export class AppComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  title = 'estate-scout';
  featuredProperties: Property[] = [];

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe(
      property => {
        this.featuredProperties.push(...property)
      });

  }
}
