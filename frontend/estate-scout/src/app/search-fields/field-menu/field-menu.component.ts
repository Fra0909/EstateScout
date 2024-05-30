import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {DropdownFieldComponent} from "../dropdown-field/dropdown-field.component";

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
export class FieldMenuComponent {
  @Input() fieldMenuStartingValue: string = "";

  @Input() leftSubDropdownTitle: string = "";
  @Input() leftSubDropdownValues: any = [];

  @Input() rightSubDropdownTitle: string = "";
  @Input() rightSubDropdownValues: any = [];

}
