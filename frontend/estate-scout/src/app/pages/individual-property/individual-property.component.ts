import {Component, Input, OnInit} from '@angular/core';
import {Property} from "../../models/property";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-individual-property',
  standalone: true,
  imports: [],
  templateUrl: './individual-property.component.html',
  styleUrl: './individual-property.component.css'
})
export class IndividualPropertyComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

  }
}
