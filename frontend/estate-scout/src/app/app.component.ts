import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullscreenContainerComponent } from "./fullscreen-container/fullscreen-container.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgForOf } from "@angular/common";
import { PropertyListingComponent } from "./property-listing/property-listing.component";
import { Property } from "./models/property";
import { PropertyService } from "./services/property.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FullscreenContainerComponent, NavbarComponent, NgForOf, PropertyListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  title = 'estate-scout';
  featuredProperties: Property[] = [];

  ngOnInit() {
    // Temporary mock featured properties
    for (let i = 0; i < 3; i++) {
      this.propertyService.getProperty(i).subscribe(property => this.featuredProperties.push(property));
    }
  }
}
