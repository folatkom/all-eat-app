import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'create-order',
            loadChildren: async () => (await import('../create-order/create-order.module')).CreateOrderModule,
          },
        ],
      },
    ]),
  ],
})
export class ShellModule {}
