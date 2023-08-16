import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';
import { PropertyService } from '../property.service';
import { SharedService } from '../shared.service';

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
  username: string = '';

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
    private propertyService: PropertyService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    // Get user's current location
    this.getUserLocation();

    // Fetch saved search details for the logged-in user
    const currentUserString = localStorage.getItem('userObj');
    if (currentUserString) {
      const currentUser = JSON.parse(currentUserString);
      this.propertyService
        .getUserSearchDetailsByUsername(currentUser.username)
        .subscribe(
          (searchDetails) => {
            if (searchDetails) {
              if (searchDetails.city) {
                this.selectedCity = searchDetails.city;
                this.selectedArea = searchDetails.area;
                this.searchType = 'city';
              } else {
                this.userLatitude = searchDetails.latitude;
                this.userLongitude = searchDetails.longitude;
                this.distance = searchDetails.distance;
                this.searchType = 'coordinates';
              }
            }
          },
          (error) => {
            console.error('Error fetching user search details:', error);
          }
        );
    }

    // Fetch the search results
    this.propertyService.getSearchResults().subscribe((results) => {
      this.properties = results;
    });

    // Fetch city names on component initialization
    this.fetchCityNames();

    // Subscribe to the username$ observable to get the username
    this.sharedService.username$.subscribe((username) => {
      this.username = username;
    });
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

  saveSearchDetails() {
    if (this.searchType === 'coordinates') {
      const searchDetails = {
        username: this.propertyService.currentUser.username,
        latitude: this.userLatitude,
        longitude: this.userLongitude,
        distance: this.distance,
      };

      this.propertyService
        .saveSearchDetailsWithDistance(searchDetails)
        .subscribe(
          () => {
            alert('Search details with distance saved successfully');
          },
          (error) => {
            console.error('Error saving search details with distance:', error);
          }
        );
    } else if (this.searchType === 'city') {
      const searchDetails = {
        username: this.propertyService.currentUser.username,
        latitude: this.userLatitude,
        longitude: this.userLongitude,
        city: this.selectedCity,
        area: this.selectedArea,
      };
      console.log('Search details:', searchDetails);

      this.propertyService.saveSearchDetails(searchDetails).subscribe(
        () => {
          alert('Search details saved successfully');
        },
        (error) => {
          console.error('Error saving search details:', error);
        }
      );
    }
  }
}
