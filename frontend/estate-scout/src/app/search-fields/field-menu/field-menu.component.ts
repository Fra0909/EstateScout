import {Component, Input, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {DropdownFieldComponent} from "../dropdown-field/dropdown-field.component";
import {MatSelect, MatSelectChange} from "@angular/material/select";
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
  @Input() defaultMenuValue: string = "";
  @Input() fieldMenuValue: string = "";

  @Input() minSubDropdownTitle: string = "";
  @Input() minSubDropdownValues: any = [];
  minSelectedDropdownValue: number = 0;

  @Input() maxSubDropdownTitle: string = "";
  @Input() maxSubDropdownValues: any = [];
  maxSelectedDropdownValue: number = 0;

  ngOnInit() {
    this.fieldMenuValue = this.defaultMenuValue;
  }

  public subDropdownValueChanged(selectChange: MatSelectChange, sideOfSubDropdown: string) {
    if (sideOfSubDropdown === "leftSubDropdown") {
      this.minSelectedDropdownValue = selectChange.value;
    }
    else if (sideOfSubDropdown === "rightSubDropdown") {
      this.maxSelectedDropdownValue = selectChange.value;
    }

    this.createViewValueForFieldMenu();
  }

  public createViewValueForFieldMenu() {
    if (this.maxSelectedDropdownValue === 0 && this.minSelectedDropdownValue > 0) {
      this.fieldMenuValue = `${this.minSelectedDropdownValue} minimum`;
    }
    else if (this.minSelectedDropdownValue === 0 && this.maxSelectedDropdownValue > 0) {
      this.fieldMenuValue = `${this.maxSelectedDropdownValue} maximum`;
    }
    else if (this.minSelectedDropdownValue === 0 && this.maxSelectedDropdownValue === 0) {
      this.fieldMenuValue = `${this.defaultMenuValue}`;
    }
    else {
      this.fieldMenuValue = `${this.minSelectedDropdownValue} - ${this.maxSelectedDropdownValue}`;
    }
  }

}
