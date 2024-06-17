import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SearchResultsComponent} from "./pages/search-results/search-results.component";
import {IndividualPropertyComponent} from "./pages/individual-property/individual-property.component";
import {resolve} from "node:path";
import {propertyResolver} from "./resolvers/property.resolver";
import {PreSearchComponent} from "./pages/pre-search/pre-search.component";
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'individual-property', component: IndividualPropertyComponent, resolve: { property: propertyResolver } },
  { path: 'pre-search', component: PreSearchComponent }
];
