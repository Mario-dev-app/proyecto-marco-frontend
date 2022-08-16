import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';





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
    InputTextModule,
    TableModule,
    DialogModule,
    DropdownModule,
    InputSwitchModule
  ]
})
export class PrimeNgModule { }
