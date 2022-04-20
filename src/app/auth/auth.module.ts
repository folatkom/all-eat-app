import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    SharedModule,

    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
      },
    ]),
    CommonModule,
  ],
})
export class AuthModule {}
