import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Restaurant {
  id: number;
  name: string;
  menu: Dish[];
}
interface Dish {
  name: string;
  price: number;
}
export interface User {
  id: number;
  fullName: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
