import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-property-search-results',
  templateUrl: './property-search-results.component.html',
  styleUrls: ['./property-search-results.component.css'],
})
export class PropertySearchResultsComponent implements OnInit, AfterViewInit {
  properties: any[] = [];
  loading: boolean = false;
  enableTiltEffect: boolean = false; // Set this to true to enable the tilt effect

  @ViewChild('cardsContainer', { static: false })
  cardsContainerRef!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get the properties data from the route query parameters
    this.route.queryParams.subscribe((params) => {
      if (params.hasOwnProperty('properties')) {
        this.properties = JSON.parse(params['properties']);
      } else {
        this.properties = [];
      }

      // Update the search results in the property service
      this.propertyService.setSearchResults(this.properties);
    });
  }

  ngAfterViewInit() {
    // Check if tilt effect should be enabled
    if (this.enableTiltEffect) {
      VanillaTilt.init(this.cardsContainerRef.nativeElement, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.4,
      });
    }
  }

  goBack() {
    // Navigate back to the PropertySearchComponent
    this.router.navigate(['/']);
  }

  viewPropertyDetails(propertyId: number) {
    this.router.navigate(['/property-details'], {
      queryParams: { id: propertyId },
    });
  }

  selectedProperty: any; // Variable to store the selected property details

  onCardClick(property: any) {
    this.selectedProperty = property;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      // Redirect to the property details page after 2 seconds
      this.router.navigate(['/property-details'], {
        queryParams: { id: property.property_id },
      });
    }, 2000);
  }
}
