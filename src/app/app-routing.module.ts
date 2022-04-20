import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: async () => (await import('./auth/auth.module')).AuthModule,
      },
      {
        path: 'signup',
        loadChildren: async () => (await import('./signup/signup.module')).SignupModule,
      },
      {
        path: 'app',
        loadChildren: async () => (await import('./shell/shell.module')).ShellModule,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth',
      },
      {
        path: '**',
        redirectTo: 'auth',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
