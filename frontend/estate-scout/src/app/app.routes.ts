import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchResultsComponent} from "./pages/search-results/search-results.component";
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-results', component: SearchResultsComponent }
];
