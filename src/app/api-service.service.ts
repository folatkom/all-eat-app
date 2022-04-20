import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant, User } from './app.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  restaurantSelected$ = new Subject<Restaurant>();
  constructor(private http: HttpClient) {}
  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('http://localhost:3000/restaurants');
  }
  public selectRestaurant(restaurant: Restaurant) {
    this.restaurantSelected$.next(restaurant);
  }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  public searchUsers(value: string) {
    const myParams = new HttpParams().set('q', value);
    return this.http.get<User[]>('http://localhost:3000/users', {
      params: myParams,
    });
  }
}
