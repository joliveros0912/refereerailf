import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OrganizadoresgisPageRoutingModule } from './organizadoresgis-routing.module';
import { OrganizadoresgisPage } from './organizadoresgis.page';
import { SharedModule } from 'src/app/shared/shared.module';

import { ApiService } from 'src/app/services/api.service';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizadoresgisPageRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [OrganizadoresgisPage],
  providers: [ApiService]
})
export class OrganizadoresgisPageModule {}
export interface ApiResponse {
  resultado: string;
  mensaje: string;
}
