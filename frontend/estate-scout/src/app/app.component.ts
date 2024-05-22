import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { PropertyService } from "./services/property.service";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HttpClientModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PropertyService]
})

export class AppComponent{
}
