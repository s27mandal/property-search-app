import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  propertyId: number = 0;
  propertyDetails: any;
  username: string = '';

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.propertyId = +params['id'];
      this.getPropertyDetails(this.propertyId);
    });
    this.sharedService.username$.subscribe((username) => {
      this.username = username;
    });
  }

  getPropertyDetails(propertyId: number) {
    this.propertyService.getPropertyDetails(propertyId).subscribe(
      (response) => {
        this.propertyDetails = response;
        console.log('API Response:', response);
        console.log('Property Details:', this.propertyDetails);

        console.log('Property ID:', this.propertyDetails.propertyId);
        console.log('Property Name:', this.propertyDetails.propertyName);
      },
      (error) => {
        console.error('Error fetching property details:', error);
      }
    );
  }
  getImageUrl(propertyId: number, imageName: string): string {
    return `assets/images/property_${propertyId}/${imageName}`;
  }
  navigateToLoanEligibilityForm() {
    this.router.navigate(['/loan-eligibility-form']);
  }
}
