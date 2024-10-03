import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; // Importa el controlador de modal de Ionic
import { FormModalComponent } from '../form-modal/form-modal.component'; // Asegúrate de importar correctamente
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-organizador-perfil',
  templateUrl: './organizador-perfil.page.html',
  styleUrls: ['./organizador-perfil.page.scss'],
})
export class OrganizadorPerfilPage implements OnInit {
  selectedOption: string = ''; // Variable para mantener la opción seleccionada
  localidades = [
    'Usaquén', 'Chapinero', 'Santa Fe', 'San Cristóbal', 'Usme', 'Tunjuelito',
    'Bosa', 'Kennedy', 'Fontibón', 'Engativá', 'Suba', 'Barrios Unidos',
    'Teusaquillo', 'Los Mártires', 'Antonio Nariño', 'Puente Aranda',
    'La Candelaria', 'Rafael Uribe Uribe', 'Ciudad Bolívar', 'Sumapaz', 'Soacha'
  ];
  estados = ['espera', 'reservado', 'compleatdo'];


  form_amistoso = new FormGroup({
    fecha_de_inicio: new FormControl("", [Validators.required]),
    localidad: new FormControl("", [Validators.required]),
    hora: new FormControl("", [Validators.required]),
    Lugar: new FormControl("", [Validators.required]),
    tipo_de_arbitro: new FormControl("", [Validators.required]),
  });

  form_torneo = new FormGroup({
    fecha_de_inicio: new FormControl("", [Validators.required]),
    fecha_de_fin: new FormControl("", [Validators.required]),

    localidad: new FormControl("", [Validators.required]),
    hora: new FormControl("", [Validators.required]),
    Lugar: new FormControl("", [Validators.required]),
    tipo_de_arbitro: new FormControl("", [Validators.required]),
  });
  cedula: string = '';
  characters: any[] = [];  


  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private modalController: ModalController, private servicio: ApiService) { }

  ngOnInit() {
    // Obtener el parámetro 'cedula' de la URL
    this.route.paramMap.subscribe(params => {
      this.cedula = params.get('cedula') || '';
    });
    
    this.http.get<any>('http://127.0.0.1:8000/api/evento/?organizador=' + this.cedula)
      .subscribe(res => {
        console.log(res);
        this.characters = res; // Asigna el arreglo de objetos 'res' a 'characters'
      });
  }

  onSubmitAmistoso() {
    if (this.form_amistoso.valid) {
      const formData = {
        fecha_de_inicio: this.form_amistoso.get('fecha_de_inicio')?.value,
        localidad: this.form_amistoso.get('localidad')?.value,
        hora: this.form_amistoso.get('hora')?.value,
        lugar: this.form_amistoso.get('Lugar')?.value,
        tipo_de_arbitro: this.form_amistoso.get('tipo_de_arbitro')?.value,
        fecha_de_finalizacion: null,
        estado: 'espera',
        organizador: this.cedula, // Ajusta según sea necesario
        tipo: 'amistoso',
        arbitros: null,
      };

      console.log('Formulario Amistoso válido:', formData);

      this.servicio.agregarevento(formData).subscribe(
        response => {
          console.log('Evento agregado exitosamente:', response);
          window.location.reload();        },
        error => {
          console.error('Error al agregar el evento:', error);
          console.error('Código de error:', error.status);
          console.error('Mensaje de error:', error.error);
        }
      );
    } else {
      console.error('Formulario Amistoso inválido. Revise los campos.');
    }
  }

  
  
  

  onSubmitTorneo() {

    // 
    if (this.form_torneo.valid) {
      const formData = {
        fecha_de_inicio: this.form_torneo.get('fecha_de_inicio')?.value,
        fecha_de_finalizacion:this.form_torneo.get('fecha_de_fin')?.value,
        localidad: this.form_torneo.get('localidad')?.value,
        hora: this.form_torneo.get('hora')?.value,
        lugar: this.form_torneo.get('Lugar')?.value,
        tipo_de_arbitro: this.form_torneo.get('tipo_de_arbitro')?.value,
        estado: 'espera',
        organizador: this.cedula, // Ajusta según sea necesario
        tipo: 'torneo',
        arbitros: null,
      };

      console.log('Formulario Amistoso válido:', formData);

      this.servicio.agregarevento(formData).subscribe(
        response => {
          console.log('Evento agregado exitosamente:', response);
          window.location.reload();        },
        error => {
          console.error('Error al agregar el evento:', error);
          console.error('Código de error:', error.status);
          console.error('Mensaje de error:', error.error);
        }
      );
    } else {
      console.error('Formulario Amistoso inválido. Revise los campos.');
    }
  }

  selectOption(option: string): void {
    this.selectedOption = option; // Actualiza la variable con el botón seleccionado
    this.openFormModal(); // Llama a la función para abrir el segundo modal con formulario
  }

  async openFormModal() {
    const modal = await this.modalController.create({
      component: FormModalComponent, // Componente del modal con el formulario
      componentProps: {
        selectedOption: this.selectedOption // Pasa el dato seleccionado al segundo modal
      }
    });

    await modal.present(); // Abre el segundo modal
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