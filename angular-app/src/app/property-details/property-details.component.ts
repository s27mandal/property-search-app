import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  propertyId: number = 0;
  propertyDetails: any;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit() {
    // Get the property ID from the query parameter
    this.route.queryParams.subscribe((params) => {
      this.propertyId = +params['id']; // Convert the parameter to a number
      console.log('Property ID:', this.propertyId);

      // Fetch the property details using the property ID
      this.getPropertyDetails(this.propertyId);
    });
  }

  getPropertyDetails(propertyId: number) {
    // Call the service to fetch property details based on property ID
    this.propertyService.getPropertyDetails(propertyId).subscribe(
      (response) => {
        // Handle the response from the service
        this.propertyDetails = response;
      },
      (error) => {
        console.error('Error fetching property details:', error);
      }
    );
  }
}
