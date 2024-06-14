import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchResultsComponent} from "./pages/search-results/search-results.component";
import {IndividualPropertyComponent} from "./pages/individual-property/individual-property.component";
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'individual-property', component: IndividualPropertyComponent }
];
