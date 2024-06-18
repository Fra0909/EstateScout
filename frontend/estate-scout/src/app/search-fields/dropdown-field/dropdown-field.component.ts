import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatOption, MatSelect, MatSelectChange} from "@angular/material/select";
import {DropdownValue} from "../../models/dropdown-value";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-dropdown-field',
  standalone: true,
  imports: [
    MatSelect,
    MatOption,
    MatFormField,
    NgStyle
  ],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.css'
})

export class DropdownFieldComponent {
  @Input() dropdownValues: DropdownValue[] = []
  @Input() selectedValue: number = 0;
  @Input() fieldWidth: string = "";
  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

  onSelectionChange(event: MatSelectChange) {
    console.log(this.selectedValue);
    this.selectionChange.emit(event);
  }

}
