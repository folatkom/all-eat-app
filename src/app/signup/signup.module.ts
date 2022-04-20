import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    SharedModule,

    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignupComponent,
      },
    ]),
    CommonModule,
  ],
})
export class SignupModule {}
