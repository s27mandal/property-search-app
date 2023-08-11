import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertySearchComponent } from './property-search/property-search.component';
import { PropertySearchResultsComponent } from './property-search-results/property-search-results.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LoanEligibilityFormComponent } from './loan-eligibility-form/loan-eligibility-form.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'property-search', component: PropertySearchComponent },
  {
    path: 'property-search-results',
    component: PropertySearchResultsComponent,
  },

  { path: 'property-details/:id', component: PropertyDetailsComponent },
  { path: 'loan-eligibility-form', component: LoanEligibilityFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
