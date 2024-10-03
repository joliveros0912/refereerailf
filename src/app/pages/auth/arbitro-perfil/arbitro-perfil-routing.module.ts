import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbitroPerfilPage } from './arbitro-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ArbitroPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbitroPerfilPageRoutingModule {}
