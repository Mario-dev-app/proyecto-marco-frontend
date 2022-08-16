import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadosDeCuentaComponent } from './estados-de-cuenta/estados-de-cuenta.component';
import { ReporteComponent } from './reporte/reporte.component';


@NgModule({
  declarations: [
    PagesComponent,
    EstadosDeCuentaComponent,
    ReporteComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
