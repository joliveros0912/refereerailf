import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { ArbitroresgisPageRoutingModule } from './arbitroresgis-routing.module';

import { ArbitroresgisPage } from './arbitroresgis.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/services/api.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbitroresgisPageRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [ArbitroresgisPage],
  providers: [ApiService]
})

export class ArbitroresgisPageModule {}
export interface ApiResponse {
  resultado: string;
  mensaje: string;
}