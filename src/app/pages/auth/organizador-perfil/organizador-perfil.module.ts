import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrganizadorPerfilPageRoutingModule } from './organizador-perfil-routing.module';
import { OrganizadorPerfilPage } from './organizador-perfil.page';
import { FormModalComponent } from '../form-modal/form-modal.component'; // Asegúrate de importar el componente
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { ApiService } from 'src/app/services/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizadorPerfilPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [OrganizadorPerfilPage,FormModalComponent ],
  providers: [ApiService]
})
export class OrganizadorPerfilPageModule {}
