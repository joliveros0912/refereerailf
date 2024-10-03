import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbitroPage } from './arbitro.page';

const routes: Routes = [
  {
    path: '',
    component: ArbitroPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbitroPageRoutingModule {}
