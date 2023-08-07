import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertySearchComponent } from './property-search/property-search.component';
import { PropertySearchResultsComponent } from './property-search-results/property-search-results.component';
import { PropertyDetailsComponent } from './property-details/property-details.component'; // Import the new component

const routes: Routes = [
  { path: '', component: PropertySearchComponent },
  {
    path: 'property-search-results',
    component: PropertySearchResultsComponent,
  },
  { path: 'property-details', component: PropertyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
