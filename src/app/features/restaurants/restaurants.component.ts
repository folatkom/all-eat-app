import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../../api-service.service';
import { Restaurant } from '../../app.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  public restaurantsList$: Observable<Restaurant[]>;

  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.restaurantsList$ = this.api.getRestaurants();
  }
  selectRestaurant(restaurant: Restaurant) {
    console.log(restaurant);
    this.api.selectRestaurant(restaurant);
  }
}
