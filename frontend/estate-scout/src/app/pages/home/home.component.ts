import {Component, OnInit} from '@angular/core';
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
export class HomeComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  title = 'estate-scout';
  featuredProperties: Property[] = [];

  ngOnInit() {
    this.propertyService.getFeaturedProperties().subscribe(
      propertiesResults => {
        this.featuredProperties.push(...propertiesResults.properties)
      });
  }
}
