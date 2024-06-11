import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {PropertySearchFilter} from "../models/property-search-filter";
import {PropertyType} from "../enums/property-type";

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.css'
})
export class CtaButtonComponent {
  @Input() text: string = "";
  @Input() buttonType!: PropertyType;
  @Input() initialPropertyFilter: PropertySearchFilter = {};
  @Output() showLocationFieldEmptyWarning: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ctaButtonClick() {
    if (this.initialPropertyFilter.shortAddress != undefined) {
      this.initialPropertyFilter.propertyType = this.buttonType;
      this.router.navigate(["/search-results"], { queryParams: this.initialPropertyFilter });
    }
    else {
      this.showLocationFieldEmptyWarning.emit(true);
    }
  }
}
