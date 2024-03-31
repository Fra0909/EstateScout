import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FullscreenContainerComponent} from "./fullscreen-container/fullscreen-container.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FullscreenContainerComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estate-scout';
}
