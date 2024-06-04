import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatOption, MatSelect, MatSelectChange} from "@angular/material/select";
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
  selectedValue: number = 0;
  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

  public onSelectionChange(event: MatSelectChange) {
    this.selectionChange.emit(event);
  }

}
