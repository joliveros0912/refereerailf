import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizadorPerfilPage } from './organizador-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizadorPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizadorPerfilPageRoutingModule {}
