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
  distance: number = 0.5;
  properties: any[] = []; // Property array to hold search results
  searchType: string = 'coordinates'; // Default search type
  cityName: string = '';
  savingCriteria: boolean = false;

  cities: string[] = [
    'Delhi',
    'Chennai',
    'Mumbai',
    'Hyderabad',
    'Pune',
    'Bhopal',
    'Gurgaon',
    'Noida',
    'Chandigarh',
    'Kochi',
    'Bengaluru',
  ];
  citiesWithAreas: { [city: string]: string[] } = {
    Delhi: [
      'Pitampura',
      'Rohini',
      'Karol Bagh',
      'Dwarka',
      'Lajpat Nagar',
      'Mayur Vihar',
      'Saket',
      'Vasant Kunj',
      'Nehru Place',
      'Malviya Nagar',
    ],
    Chennai: ['T. Nagar', 'Anna Nagar', 'Mylapore', 'Adyar'],
    Mumbai: ['Bandra', 'Andheri', 'Dadar', 'Colaba', 'Powai'],
    Bengaluru: [
      'Koramangala',
      'Indiranagar',
      'Jayanagar',
      'Whitefield',
      'Malleshwaram',
      'Electronic City',
      'Banashankari',
    ],
  };
  selectedCity: string = '';
  selectedArea: string = '';

  onCityChange() {
    if (this.searchType === 'city' && this.selectedCity) {
      this.propertyService
        .getAreasForCity(this.selectedCity)
        .subscribe((areas) => {
          this.citiesWithAreas[this.selectedCity] = areas;
        });
    }
  }

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

  // Function to toggle between search types
  toggleSearchType() {
    this.searchType =
      this.searchType === 'coordinates' ? 'city' : 'coordinates';

    // Reset selectedCity and selectedArea when toggling
    this.selectedCity = '';
    this.selectedArea = '';
  }

  searchProperties() {
    console.log('Search Type:', this.searchType);

    if (this.searchType === 'coordinates') {
      // Search by coordinates
      console.log('Latitude:', this.userLatitude);
      console.log('Longitude:', this.userLongitude);
      console.log('Distance:', this.distance);
      console.log('City:', this.cityName);
      this.getProperties(this.userLatitude, this.userLongitude, this.distance);
    } else if (this.searchType === 'city') {
      console.log('City:', this.selectedCity);
      console.log('Area:', this.selectedArea);
      // Search by city
      console.log('City:', this.userCity);
      this.getPropertiesByCity(this.cityName, this.distance);
    }
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
        if (!this.userCity) {
          // Set the city name only if it's not already set
          this.userCity = response.data.city;
        }
      })
      .catch((error) => {
        console.log('Error fetching city data from ipapi: ', error);
      });
  }

  // Function to fetch properties from the backend API by coordinates
  getProperties(latitude: number, longitude: number, distance: number) {
    const apiUrl = `http://localhost:8080/property/${latitude}/${longitude}/${distance}`;

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.handlePropertyResponse(response);
      },
      (error) => {
        this.handlePropertyError(error);
      }
    );
  }

  // Function to fetch properties from the backend API by city
  getPropertiesByCity(city: string, distance: number) {
    const apiUrl = `http://localhost:8080/property/${city}/${distance}`;

    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.handlePropertyResponse(response);
      },
      (error) => {
        this.handlePropertyError(error);
      }
    );
  }

  // Function to handle property response from the backend API
  handlePropertyResponse(response: any[]) {
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
  }

  // Function to handle property error from the backend API
  handlePropertyError(error: any) {
    console.error('Error fetching properties:', error);
    this.properties = [];

    // Navigate to the PropertySearchResultsComponent with empty query parameter
    this.router.navigate(['/property-search-results'], {
      queryParams: { properties: '[]' },
    });
  }
  confirmCoordinatesSearch() {
    if (this.searchType === 'coordinates') {
      const confirmed = confirm(
        'Are you sure you want to search for properties using Coordinates? Use City Search Instead'
      );

      if (confirmed) {
        this.searchProperties();
      }
    } else {
      this.searchProperties();
    }
  }
}
