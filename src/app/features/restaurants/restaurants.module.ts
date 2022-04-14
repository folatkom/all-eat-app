import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [SharedModule, CommonModule],
  exports: [RestaurantsComponent],
})
export class RestaurantsModule {}
