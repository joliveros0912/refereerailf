import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArbitroPerfilPageRoutingModule } from './arbitro-perfil-routing.module';
import { ArbitroPerfilPage } from './arbitro-perfil.page';
import { FormModalComponent } from '../form-modal/form-modal.component'; // Asegúrate de importar el componente
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { ApiService } from 'src/app/services/api.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbitroPerfilPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  declarations: [ArbitroPerfilPage],
  providers: [ApiService]
})
export class ArbitroPerfilPageModule {}
