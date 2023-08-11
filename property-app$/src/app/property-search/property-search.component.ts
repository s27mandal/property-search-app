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

  cities: string[] = [];
  areas: string[] = [];
  selectedCity: string = '';
  selectedArea: string = '';

  onCityChange() {
    if (this.searchType === 'city' && this.selectedCity) {
      this.propertyService.getAreasForCity(this.selectedCity).subscribe(
        (areas) => {
          this.areas = areas;
        },
        (error) => {
          console.error('Error fetching areas:', error);
        }
      );
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

    // Fetch city names on component initialization
    this.fetchCityNames();
  }

  toggleSearchType() {
    this.searchType =
      this.searchType === 'coordinates' ? 'city' : 'coordinates';
    this.selectedCity = '';
    this.selectedArea = '';
  }

  searchProperties() {
    if (this.searchType === 'coordinates') {
      this.getProperties(this.userLatitude, this.userLongitude, this.distance);
    } else if (this.searchType === 'city') {
      this.getPropertiesByCity(this.selectedCity, this.distance);
    }
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLatitude = position.coords.latitude;
          this.userLongitude = position.coords.longitude;
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
    axios
      .get('https://ipapi.co/json')
      .then((response) => {
        if (!this.userCity) {
          this.userCity = response.data.city;
        }
      })
      .catch((error) => {
        console.log('Error fetching city data from ipapi: ', error);
      });
  }

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

  handlePropertyResponse(response: any[]) {
    if (response.length > 0) {
      this.properties = response;
      this.router.navigate(['/property-search-results'], {
        queryParams: { properties: JSON.stringify(response) },
      });
    } else {
      this.properties = [];
      this.router.navigate(['/property-search-results'], {
        queryParams: { properties: '[]' },
      });
    }
  }

  handlePropertyError(error: any) {
    console.error('Error fetching properties:', error);
    this.properties = [];
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
  fetchCityNames() {
    this.propertyService.getCityNames().subscribe(
      (cities) => {
        this.cities = cities;
      },
      (error) => {
        console.error('Error fetching city names:', error);
      }
    );
  }
  fetchPropertiesByCityAndArea(city: string, area: string) {
    // Make an HTTP GET request to your backend API
    const apiUrl = `http://localhost:8080/property//${city}/${area}`;
    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        // Handle the response (you can update your properties array or handle it as needed)
        console.log('Fetched properties:', response);

        // Update route and navigate to /property-search-results
        this.router.navigate(['/property-search-results'], {
          queryParams: { properties: JSON.stringify(response) },
        });
      },
      (error) => {
        // Handle errors (e.g., display an error message)
        console.error('Error fetching properties:', error);
        // Handle error here...
      }
    );
  }
  performSearch() {
    if (this.searchType === 'coordinates') {
      this.getProperties(this.userLatitude, this.userLongitude, this.distance);
    } else if (this.searchType === 'city') {
      this.fetchPropertiesByCityAndArea(this.selectedCity, this.selectedArea);
    }
  }
}
