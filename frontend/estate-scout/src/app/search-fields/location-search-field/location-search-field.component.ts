import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [],
  templateUrl: './location-search-field.component.html',
  styleUrl: './location-search-field.component.css'
})
export class LocationSearchFieldComponent {

  @Input() fieldName!: string;

}
