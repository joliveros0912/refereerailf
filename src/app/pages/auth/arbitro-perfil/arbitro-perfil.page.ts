import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; // Importa el controlador de modal de Ionic
import { FormModalComponent } from '../form-modal/form-modal.component'; // Asegúrate de importar correctamente
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-arbitro-perfil',
  templateUrl: './arbitro-perfil.page.html',
  styleUrls: ['./arbitro-perfil.page.scss'],
})
export class ArbitroPerfilPage implements OnInit {
  selectedOption: string = ''; // Variable para mantener la opción seleccionada
  cedula: string = '';
  characters: any[] = [];  
  historial:any[]=[];
  estados = ['espera', 'reservado', 'compleatdo'];


  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private modalController: ModalController, private servicio: ApiService) { }

  ngOnInit() {
    // Obtener el parámetro 'cedula' de la URL
    this.route.paramMap.subscribe(params => {
      this.cedula = params.get('cedula') || '';
    });
    
    this.http.get<any>('https://refererail-production.up.railway.app/api/evento/?estado=' + 'espera')
      .subscribe(res => {
        console.log(res);
        this.characters = res; // Asigna el arreglo de objetos 'res' a 'characters'
      });

      this.http.get<any>('https://refererail-production.up.railway.app/api/evento/?arbitros=' + this.cedula)
      .subscribe(his => {
        console.log(his);
        this.historial = his; // Asigna el arreglo de objetos 'res' a 'characters'
      });

  }
  selectOption(option: string): void {
    this.selectedOption = option; // Actualiza la variable con el botón seleccionado
  }
  


  actualizar(idEvento: number) {
    this.servicio.actualizarEvento(idEvento, this.cedula, 'reservado').subscribe(
      response => {
        console.log('Evento actualizado:', response);
        window.location.reload(); 
        // Aquí puedes manejar la respuesta o realizar alguna acción adicional
        // Por ejemplo, mostrar un mensaje de éxito al usuario
        // this.mostrarMensajeExito('Evento actualizado correctamente.');
      },
      error => {
        console.error('Error al actualizar evento:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
        // this.mostrarMensajeError('Error al actualizar el evento.');
      }
    );
    
  }
  redirecRES() {
    this.router.navigate(['arbitro']);
  }


  getEstadoClass(estado: string) {
    switch (estado) {
      case 'espera':
        return 'estado-espera';
      case 'reservado':
        return 'estado-reservado';
      case 'compleatdo':
        return 'estado-compleatdo';
      default:
        return 'estado-default';
    }
  }
}