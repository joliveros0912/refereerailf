import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'organizador',
    loadChildren: () => import('./organizador/organizador.module').then( m => m.OrganizadorPageModule)
  },
  {
    path: 'arbitro',
    loadChildren: () => import('./arbitro/arbitro.module').then( m => m.ArbitroPageModule)
  },
  {
    path: 'arbitroresgis',
    loadChildren: () => import('./arbitroresgis/arbitroresgis.module').then( m => m.ArbitroresgisPageModule)
  },
  {
    path: 'organizadoresgis',
    loadChildren: () => import('./organizadoresgis/organizadoresgis.module').then( m => m.OrganizadoresgisPageModule)
  },
  {
    path: 'arbitroperfil',
    loadChildren: () => import('./arbitro-perfil/arbitro-perfil.module').then( m => m.ArbitroPerfilPageModule)
  },
  {
    path: 'organizadorperfil',
    loadChildren: () => import('./organizador-perfil/organizador-perfil.module').then( m => m.OrganizadorPerfilPageModule)
  },


 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
