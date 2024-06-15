import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Property} from "../../models/property";
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../../services/property.service";
import {Subscription} from "rxjs";
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-individual-property',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf
  ],
  templateUrl: './individual-property.component.html',
  styleUrl: './individual-property.component.css'
})
export class IndividualPropertyComponent implements OnInit, OnDestroy {
  private readonly routeSubscription!: Subscription;
  private readonly propertySubscription!: Subscription;
  property!: Property;

  constructor(private route: ActivatedRoute) {}

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
