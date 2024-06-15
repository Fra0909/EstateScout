import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Property} from "../../models/property";
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../../services/property.service";
import {Subscription} from "rxjs";
import {CurrencyPipe, NgIf} from "@angular/common";
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {GoogleMapComponent} from "../../google-map/google-map.component";

@Component({
  selector: 'app-individual-property',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    MatIcon,
    GoogleMapComponent
  ],
  templateUrl: './individual-property.component.html',
  styleUrl: './individual-property.component.css'
})
export class IndividualPropertyComponent implements OnInit, OnDestroy {
  private readonly routeSubscription!: Subscription;
  private readonly propertySubscription!: Subscription;
  property!: Property;

  constructor(private route: ActivatedRoute, private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon("bed", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/bed.svg"));
    this.matIconRegistry.addSvgIcon("bath", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/bath.svg"));
    this.matIconRegistry.addSvgIcon("couch", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/couch.svg"));
    this.matIconRegistry.addSvgIcon("car", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/car.svg"));
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.property = data["property"];
    })
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }

    if (this.propertySubscription) {
      this.propertySubscription.unsubscribe();
    }
  }
}
