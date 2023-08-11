import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private baseUrl = 'http://localhost:8080/property';
  private searchResultsSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  userLoginStatus: boolean = false;
  currentUser: any = null;

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
    const apiUrl = `${this.baseUrl}/details/${propertyId}`;
    return this.http.get<any>(apiUrl);
  }

  setSearchResults(results: any[]) {
    this.searchResultsSubject.next(results);
  }

  getSearchResults(): Observable<any[]> {
    return this.searchResultsSubject.asObservable();
  }
  createUser(userObj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userObj, {
      responseType: 'text',
    });
  }

  loginUser(userCredObj: any): Observable<any> {
    //if userType is user
    if (userCredObj.usertype == 'user') {
      return this.http.post(`${this.baseUrl}/login/user`, userCredObj, {
        responseType: 'text',
      });
    }

    //if userType is admin
    else if (userCredObj.usertype == 'admin') {
      return this.http.post(`${this.baseUrl}/login/admin`, userCredObj, {
        responseType: 'text',
      });
    } else {
      return throwError('Invalid user type');
    }
  }
  logoutUser() {
    localStorage.clear();
    this.userLoginStatus = false;
  }

  logoutAdmin() {
    localStorage.clear();
    this.userLoginStatus = false;
  }

  getCityNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/city-names`);
  }

  getAreasForCity(cityName: string): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.baseUrl}/areas-for-city/${cityName}`
    );
  }
  getPropertiesByCityAndArea(
    cityName: string,
    area: string
  ): Observable<any[]> {
    const apiUrl = `${this.baseUrl}/${cityName}/${area}`;
    return this.http.get<any[]>(apiUrl);
  }
}
