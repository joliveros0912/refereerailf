import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizadoresgisPage } from './organizadoresgis.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizadoresgisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizadoresgisPageRoutingModule {}
