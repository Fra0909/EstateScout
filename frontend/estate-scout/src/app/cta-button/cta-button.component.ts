import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.css'
})
export class CtaButtonComponent {
  @Input() text = "";

  constructor(private router: Router) {}

  goToSearchResults() {
    this.router.navigate(["/search-results"])
  }
}
