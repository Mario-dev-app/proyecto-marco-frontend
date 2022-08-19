import { IsntLoggedGuard } from './services/guards/isnt-logged.guard';
import { IsLoggedGuard } from './services/guards/is-logged.guard';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    /* canActivate: [IsLoggedGuard], */
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login',
    /* canActivate: [IsntLoggedGuard], */
    component: LoginComponent
  },
  {
    path: 'login2',
    component: Login2Component
  },
  {
    path: '**',
    redirectTo: 'estados-de-cuenta',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
