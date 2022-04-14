import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiServiceService } from '../../api-service.service';
import { Restaurant } from '../../app.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public selectedRestaurant$: Observable<Restaurant>;
  public totalPrice: number = 0;

  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.selectedRestaurant$ = this.api.restaurantSelected$;
  }
  addPrice(price: number): number {
    this.totalPrice += price;
    return this.totalPrice;
  }
}
