import { Component } from '@angular/core';
import {BasicSearchBoxComponent} from "../basic-search-box/basic-search-box.component";

@Component({
  selector: 'app-fullscreen-container',
  standalone: true,
  imports: [
    BasicSearchBoxComponent
  ],
  templateUrl: './fullscreen-container.component.html',
  styleUrl: './fullscreen-container.component.css'
})
export class FullscreenContainerComponent {

}
