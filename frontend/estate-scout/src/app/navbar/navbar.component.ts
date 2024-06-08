import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";
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
export class NavbarComponent implements OnInit {
  @Input() boxShadowEnabled = true;

  constructor(private router: Router) {
    this.checkRoute();
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
    })
  }

  checkRoute(): void {
    this.boxShadowEnabled = this.router.url !== '/';
  }

}
