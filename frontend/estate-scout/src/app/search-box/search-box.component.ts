import { Component } from '@angular/core';
import {CtaButtonComponent} from "../cta-button/cta-button.component";

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [
    CtaButtonComponent
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

}
