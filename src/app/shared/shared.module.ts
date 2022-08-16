import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UpNavbarComponent } from './up-navbar/up-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    UpNavbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    UpNavbarComponent
  ]
})
export class SharedModule { }
