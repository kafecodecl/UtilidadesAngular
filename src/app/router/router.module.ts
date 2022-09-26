import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaRutComponent } from '../pages/validarut/validarut.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'validarut',
    pathMatch: 'full',
  },
  {
    path: 'validarut',
    component: ValidaRutComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
