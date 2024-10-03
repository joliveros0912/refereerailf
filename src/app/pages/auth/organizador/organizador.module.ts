import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizadorPageRoutingModule } from './organizador-routing.module';

import { OrganizadorPage } from './organizador.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/services/api.service';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizadorPageRoutingModule,
    SharedModule,
    HttpClientModule, 

  ],
  declarations: [OrganizadorPage],
  providers: [ApiService]
})
export class OrganizadorPageModule {}
