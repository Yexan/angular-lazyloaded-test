import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoweruserRoutingModule } from './poweruser-routing.module';
import { PoweruserComponent } from './poweruser.component';


@NgModule({
  declarations: [
    PoweruserComponent
  ],
  imports: [
    CommonModule,
    PoweruserRoutingModule
  ]
})
export class PoweruserModule { }
