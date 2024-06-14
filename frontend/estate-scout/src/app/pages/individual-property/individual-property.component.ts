import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Property} from "../../models/property";
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../../services/property.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-individual-property',
  standalone: true,
  imports: [],
  templateUrl: './individual-property.component.html',
  styleUrl: './individual-property.component.css'
})
export class IndividualPropertyComponent implements OnDestroy {
  private readonly routeSubscription: Subscription;
  private readonly propertySubscription: Subscription;
  property!: Property;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) {
      let propertyId = 0;
      this.routeSubscription = this.route.queryParams.subscribe(params => {
        propertyId = params["propertyId"];
      });

    this.propertySubscription = this.propertyService.getProperty(propertyId).subscribe(property => {
      this.property = property;
    });
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
