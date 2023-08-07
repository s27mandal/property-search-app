import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css'],
})
export class PropertySearchComponent implements OnInit {
  userCity: string = '';
  userLatitude: number = 0;
  userLongitude: number = 0;
  distance: number = 1;
  properties: any[] = []; // Property array to hold search results

  constructor(
    private http: HttpClient,
    private router: Router,
    private propertyService: PropertyService
  ) {}

  ngOnInit() {
    // Get user's current location
    this.getUserLocation();
    this.propertyService.getSearchResults().subscribe((results) => {
      this.properties = results;
    });
  }

  searchProperties() {
    console.log('Latitude:', this.userLatitude);
    console.log('Longitude:', this.userLongitude);
    console.log('Distance:', this.distance);

    // Call the service to fetch properties
    this.getProperties(this.userLatitude, this.userLongitude, this.distance);
  }

  getUserLocation() {
    // HTML Geolocation API to get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLatitude = position.coords.latitude;
          this.userLongitude = position.coords.longitude;

          // Get the city name using the ipapi API
          this.getCityNameFromIP();
        },
        (error) => {
          console.log('Error getting user location: ', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  getCityNameFromIP() {
    //  ipapi API to get the city name based on the user's IP address
    axios
      .get('https://ipapi.co/json')
      .then((response) => {
        this.userCity = response.data.city;
      })
      .catch((error) => {
        console.log('Error fetching city data from ipapi: ', error);
      });
  }

  // Function to fetch properties from the backend API
  getProperties(latitude: number, longitude: number, distance: number) {
    const apiUrl = `http://localhost:8080/property/${latitude}/${longitude}/${distance}`;

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        // Handle the response from the service
        if (response.length > 0) {
          // Properties found, update the search results
          console.log('Properties:', response);
          this.properties = response;

          // Navigate to the PropertySearchResultsComponent with query parameter
          this.router.navigate(['/property-search-results'], {
            queryParams: { properties: JSON.stringify(response) },
          });
        } else {
          console.log('Properties are not available in your area.');
          this.properties = [];

          // Navigate to the PropertySearchResultsComponent with empty query parameter
          this.router.navigate(['/property-search-results'], {
            queryParams: { properties: '[]' },
          });
        }
      },
      (error) => {
        console.error('Error fetching properties:', error);
        this.properties = [];

        // Navigate to the PropertySearchResultsComponent with empty query parameter
        this.router.navigate(['/property-search-results'], {
          queryParams: { properties: '[]' },
        });
      }
    );
  }
}
