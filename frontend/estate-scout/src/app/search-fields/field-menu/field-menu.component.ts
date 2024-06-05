import {Component, Input, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {DropdownFieldComponent} from "../dropdown-field/dropdown-field.component";
import {MatSelectChange} from "@angular/material/select";
import {DropdownFieldMenuType} from "../../enums/dropdown-field-menu-type";
import {CurrencyService} from "../../services/currency.service";
import {DropdownValue} from "../../models/dropdown-value";

@Component({
  selector: 'app-field-menu',
  standalone: true,
  imports: [
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatIcon,
    DropdownFieldComponent
  ],
  templateUrl: './field-menu.component.html',
  styleUrl: './field-menu.component.css'
})
export class FieldMenuComponent implements OnInit {
  @Input() fieldMenuType!: DropdownFieldMenuType;
  @Input() defaultMenuValue: string = "";
  @Input() fieldMenuValue: string = "";

  @Input() minSubDropdownTitle: string = "";
  @Input() minSubDropdownValues: any = [];
  minSelectedDropdownValue: number = 0;

  @Input() maxSubDropdownTitle: string = "";
  @Input() maxSubDropdownValues: any = [];
  maxSelectedDropdownValue: number = 0;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.fieldMenuValue = this.defaultMenuValue;
  }

  public subDropdownValueChanged(selectChange: MatSelectChange, subDropdown: string) {
    if (subDropdown === "minSubDropdown") {
      this.minSelectedDropdownValue = selectChange.value;
    } else if (subDropdown === "maxSubDropdown") {
      this.maxSelectedDropdownValue = selectChange.value;
    }

    this.maxSubDropdownValues = this.minSubDropdownValues.filter(
      (bed: DropdownValue) => bed.value >= this.minSelectedDropdownValue);

    if (this.maxSelectedDropdownValue < this.minSelectedDropdownValue) {
      this.maxSelectedDropdownValue = this.minSelectedDropdownValue;
    }

    this.createViewValueForFieldMenu();
  }

  private formatValue(value: number, type: DropdownFieldMenuType, suffix: string = ""): string {
    const formatters: { [key in DropdownFieldMenuType]: string } = {
      [DropdownFieldMenuType.Bedrooms]: `${value} ${suffix}`,
      [DropdownFieldMenuType.Price]: `${this.currencyService.convertNumberToGBP(value)} ${suffix}`
    };
    return formatters[type];
  }

  private createViewValueForFieldMenu() {
    if (this.maxSelectedDropdownValue === 0 && this.minSelectedDropdownValue > 0) {
        this.fieldMenuValue = this.formatValue(this.minSelectedDropdownValue, this.fieldMenuType, "min");
    } else if (this.minSelectedDropdownValue === 0 && this.maxSelectedDropdownValue > 0) {
        this.fieldMenuValue = this.formatValue(this.maxSelectedDropdownValue, this.fieldMenuType, "max");
    } else if (this.minSelectedDropdownValue === 0 && this.maxSelectedDropdownValue === 0) {
        this.fieldMenuValue = this.defaultMenuValue;
    } else {
        this.fieldMenuValue = `${this.formatValue(this.minSelectedDropdownValue, this.fieldMenuType)} -
          ${this.formatValue(this.maxSelectedDropdownValue, this.fieldMenuType)}`;
    }
  }
}
