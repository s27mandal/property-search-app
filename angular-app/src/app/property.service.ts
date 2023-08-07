import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private baseUrl = 'http://localhost:8080/property';
  private searchResultsSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);

  constructor(private http: HttpClient) {}

  getProperties(
    latitude: number,
    longitude: number,
    distance: number
  ): Observable<any[]> {
    const apiUrl = `${this.baseUrl}/${latitude}/${longitude}/${distance}`;
    return this.http.get<any[]>(apiUrl);
  }

  getPropertyDetails(propertyId: number): Observable<any> {
    const apiUrl = `${this.baseUrl}/${propertyId}/details`;
    return this.http.get<any>(apiUrl);
  }

  setSearchResults(results: any[]) {
    this.searchResultsSubject.next(results);
  }

  getSearchResults(): Observable<any[]> {
    return this.searchResultsSubject.asObservable();
  }
}
