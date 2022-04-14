import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

const MATERIALS_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIALS_MODULES],
  exports: [MATERIALS_MODULES],
})
export class SharedModule {}
