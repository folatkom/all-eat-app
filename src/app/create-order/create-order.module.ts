import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { OrderModule } from '@features/order/order.module';
import { RestaurantsModule } from '@features/restaurants/restaurants.module';
import { ParticipantsModule } from '@features/participants/participants.module';

@NgModule({
  declarations: [CreateOrderComponent],
  imports: [
    SharedModule,
    CommonModule,
    OrderModule,
    RestaurantsModule,
    ParticipantsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateOrderComponent,
      },
    ]),
  ],
})
export class CreateOrderModule {}
