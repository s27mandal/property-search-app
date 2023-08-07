import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchResultsComponent } from './property-search-results.component';

describe('PropertySearchResultsComponent', () => {
  let component: PropertySearchResultsComponent;
  let fixture: ComponentFixture<PropertySearchResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertySearchResultsComponent],
    });
    fixture = TestBed.createComponent(PropertySearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
