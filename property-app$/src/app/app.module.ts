import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertySearchResultsComponent } from './property-search-results/property-search-results.component';
import { PropertyService } from './property.service';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LoanEligibilityFormComponent } from './loan-eligibility-form/loan-eligibility-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PropertySearchComponent,
    PropertySearchResultsComponent,
    PropertyDetailsComponent,
    LoanEligibilityFormComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
