import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoweruserComponent } from './poweruser.component';

const routes: Routes = [{ path: '', component: PoweruserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoweruserRoutingModule { }
