import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'front',
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule)
  },
  {
    path: 'poweruser',
    loadChildren: () => import('./poweruser/poweruser.module').then(m => m.PoweruserModule)
  },
  {
    path: 'preview',
    loadChildren: () => import('./preview/preview.module').then(m => m.PreviewModule)
  },
  {
    path: '**',
    redirectTo: 'front',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
