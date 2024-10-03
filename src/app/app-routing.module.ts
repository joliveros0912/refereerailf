import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'arbitroResgis',
    loadChildren: () => import('./pages/auth/arbitroresgis/arbitroresgis.module').then( m => m.ArbitroresgisPageModule)
  },
  {
    path: 'organizadorRegis',
    loadChildren: () => import('./pages/auth/organizadoresgis/organizadoresgis.module').then( m => m.OrganizadoresgisPageModule)
  },
  {
    path: 'arbitro',
    loadChildren: () => import('./pages/auth/arbitro/arbitro.module').then( m => m.ArbitroPageModule)
  },
  {
    path: 'loginorganizador',
    loadChildren: () => import('./pages/auth/organizador/organizador.module').then( m => m.OrganizadorPageModule)
  },
  {
    path: 'arbitroperfil',
    loadChildren: () => import('./pages/auth/arbitro-perfil/arbitro-perfil.module').then( m => m.ArbitroPerfilPageModule)
  },
  {
    path: 'organizadorperfil',
    loadChildren: () => import('./pages/auth/organizador-perfil/organizador-perfil.module').then( m => m.OrganizadorPerfilPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

