import { Component } from '@angular/core';
import {FullscreenContainerComponent} from "../../fullscreen-container/fullscreen-container.component";
import {NgForOf} from "@angular/common";
import {PropertyListingComponent} from "../../property-listing/property-listing.component";
import {PropertyService} from "../../services/property.service";
import {Property} from "../../models/property";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        FullscreenContainerComponent,
        NgForOf,
        PropertyListingComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private propertyService: PropertyService) { }

  title = 'estate-scout';
  featuredProperties: Property[] = [];

  ngOnInit() {
    this.propertyService.getFeaturedProperties().subscribe(
      property => {
        this.featuredProperties.push(...property)
      });

  }
}
