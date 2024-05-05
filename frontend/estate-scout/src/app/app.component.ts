import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullscreenContainerComponent } from "./fullscreen-container/fullscreen-container.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgForOf } from "@angular/common";
import { Property } from "./models/property";
import { PropertyListingComponent } from "./property-listing/property-listing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FullscreenContainerComponent, NavbarComponent, NgForOf, PropertyListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estate-scout';
}
