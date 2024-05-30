import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {DropdownValue} from "../../models/dropdown-value";

@Component({
  selector: 'app-dropdown-field',
  standalone: true,
  imports: [
    MatSelect,
    MatOption,
    MatFormField
  ],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.css'
})

export class DropdownFieldComponent {
  @Input() dropdownValues: DropdownValue[] = []

}
