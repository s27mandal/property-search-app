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

@NgModule({
  declarations: [
    AppComponent,
    PropertySearchComponent,
    PropertySearchResultsComponent,
    PropertyDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PropertyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
