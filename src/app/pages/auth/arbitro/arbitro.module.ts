import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbitroPageRoutingModule } from './arbitro-routing.module';

import { ArbitroPage } from './arbitro.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbitroPageRoutingModule,
    SharedModule,
    HttpClientModule, 

  ],
  declarations: [ArbitroPage],
  providers: [ApiService]

})
export class ArbitroPageModule {}
