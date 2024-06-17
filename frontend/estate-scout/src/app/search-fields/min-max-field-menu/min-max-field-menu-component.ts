import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {DropdownFieldComponent} from "../dropdown-field/dropdown-field.component";
import {MatSelectChange} from "@angular/material/select";
import {DropdownFieldMenuType} from "../../enums/dropdown-field-menu-type";
import {CurrencyService} from "../../services/currency.service";
import {DropdownValue} from "../../models/dropdown-value";

@Component({
  selector: 'app-min-max-field-menu',
  standalone: true,
  imports: [
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatIcon,
    DropdownFieldComponent
  ],
  templateUrl: './min-max-field-menu-component.html',
  styleUrl: './min-max-field-menu-component.css'
})
export class MinMaxFieldMenuComponent implements OnInit {
  @Input() fieldMenuType!: DropdownFieldMenuType;
  @Input() defaultMenuValue: string = "";
  @Input() fieldMenuValue: string = "";

  @Input() minSubDropdownTitle: string = "";
  @Input() sourceMinSubDropdownValues: DropdownValue[] = [];
  filteredMinSubDropdownValues: DropdownValue[] = [];
  @Input() minSelectedDropdownValue: number = 0;

  @Input() maxSubDropdownTitle: string = "";
  @Input() sourceMaxSubDropdownValues: DropdownValue[] = [];
  filteredMaxSubDropdownValues: DropdownValue[] = [];
  @Input() maxSelectedDropdownValue: number = 0;

  @Output() minSelectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();
  @Output() maxSelectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.filteredMinSubDropdownValues = this.sourceMinSubDropdownValues;
    this.filteredMaxSubDropdownValues = this.sourceMaxSubDropdownValues;
    if (this.minSelectedDropdownValue || this.maxSelectedDropdownValue) {
      this.createViewValueForFieldMenu();
    }
    else {
      this.fieldMenuValue = this.defaultMenuValue;
    }
  }

  filterMinSubDropdown() {
    if (this.minSelectedDropdownValue !== 0 && this.maxSelectedDropdownValue != 0) {
      this.filteredMinSubDropdownValues = this.sourceMinSubDropdownValues.filter(
        (dropdownValue: DropdownValue) => dropdownValue.value <= this.maxSelectedDropdownValue || dropdownValue.value === 0);
    }
    else {
      this.filteredMinSubDropdownValues = this.sourceMinSubDropdownValues;
    }
  }

  filterMaxSubDropdown() {
    this.filteredMaxSubDropdownValues = this.sourceMaxSubDropdownValues.filter(
      (dropdownValue: DropdownValue) => dropdownValue.value >= this.minSelectedDropdownValue || dropdownValue.value === 0);

    if (this.maxSelectedDropdownValue !== 0 && this.maxSelectedDropdownValue < this.minSelectedDropdownValue) {
      this.maxSelectedDropdownValue = this.minSelectedDropdownValue;
    }
  }

  minSubDropdownValueChanged(selectChange: MatSelectChange) {
    this.minSelectedDropdownValue = selectChange.value;
    this.filterMaxSubDropdown()
    this.createViewValueForFieldMenu();
    this.minSelectionChange.emit(selectChange);
  }

  maxSubDropdownValueChanged(selectChange: MatSelectChange) {
    this.maxSelectedDropdownValue = selectChange.value;
    this.filterMinSubDropdown();
    this.createViewValueForFieldMenu();
    this.maxSelectionChange.emit(selectChange);
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
