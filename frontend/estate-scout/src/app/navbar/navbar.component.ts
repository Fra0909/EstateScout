import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subscription} from "rxjs";
import {PropertyType} from "../enums/property-type";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() boxShadowEnabled = true;
  subscription?: Subscription;

  constructor(private router: Router) {
    this.checkRoute();
  }

  ngOnInit(): void {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  checkRoute(): void {
    this.boxShadowEnabled = this.router.url !== '/';
  }

  homeClicked() {
    this.router.navigate(["/"]);
  }

  forSaleClicked() {
    this.router.navigate(["/pre-search"], { queryParams: { propertyType: PropertyType.forSale } });
  }

  forRentClicked() {
    this.router.navigate(["/pre-search"], { queryParams: { propertyType: PropertyType.forRent } });
  }

}
