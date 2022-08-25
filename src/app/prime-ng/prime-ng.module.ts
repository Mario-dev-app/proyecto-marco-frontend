import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {DividerModule} from 'primeng/divider';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';


import {MenubarModule} from 'primeng/menubar';
import {TooltipModule} from 'primeng/tooltip';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    TableModule,
    DropdownModule,
    MenubarModule,
    CardModule,
    TooltipModule
  ]
})
export class PrimeNgModule { }
