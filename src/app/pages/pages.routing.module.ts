import { EstadosDeCuentaComponent } from './estados-de-cuenta/estados-de-cuenta.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: 'estado-de-cuenta',
    component: EstadosDeCuentaComponent
  },
  {
    path: '',
    redirectTo: '/estado-de-cuenta',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
