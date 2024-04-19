import { Component } from '@angular/core';
import {SearchBoxComponent} from "../search-box/search-box.component";

@Component({
  selector: 'app-fullscreen-container',
  standalone: true,
  imports: [
    SearchBoxComponent
  ],
  templateUrl: './fullscreen-container.component.html',
  styleUrl: './fullscreen-container.component.css'
})
export class FullscreenContainerComponent {

}
