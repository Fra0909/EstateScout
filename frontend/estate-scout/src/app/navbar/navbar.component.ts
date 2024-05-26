import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() boxShadowEnabled = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      
    )
  }

}
