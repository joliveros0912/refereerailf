import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbitroresgisPage } from './arbitroresgis.page';

const routes: Routes = [
  {
    path: '',
    component: ArbitroresgisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbitroresgisPageRoutingModule {}
