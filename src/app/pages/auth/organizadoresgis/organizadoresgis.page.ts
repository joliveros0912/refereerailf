import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AlertController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-organizadoresgis',
  templateUrl: './organizadoresgis.page.html',
  styleUrls: ['./organizadoresgis.page.scss'],
})
export class OrganizadoresgisPage implements OnInit {
  form = new FormGroup({
    nombre_completo: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    cedula_Organizador: new FormControl("", [Validators.required]),
    celular: new FormControl("", [Validators.required]),
    contrasena: new FormControl("", [Validators.required]),
  });

  errorMessage: string = '';

  constructor(private router: Router, private servicio: ApiService, private alertController: AlertController) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      // Obtén el valor de la contraseña y asegúrate de que no sea null o undefined
      const contrase = this.form.get('contrasena')?.value || '';

      // Hashear la contraseña
      const hashedPassword = CryptoJS.SHA256(contrase).toString(CryptoJS.enc.Hex);

      // Crea un nuevo objeto formData con la contraseña hasheada
      const formData = {
        ...this.form.value,
        contrasena: hashedPassword
      };

      // Llama al método agregar_Organizador con el formData
      this.agregar_Organizador(formData);
    } else {
      // Manejo de errores de validación del formulario
      console.log("Formulario inválido");
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async gracias(message: string) {
    const alert = await this.alertController.create({
      header: 'Ya eres parte de nuestra familia',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  agregar_Organizador(formData: any) {
    console.log('Form Values:', formData);

    if (this.form.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.';
      return;
    }

    this.servicio.agregarOrganizador(formData).subscribe(
      datos => {
        if (datos.resultado === 'OK') {
          this.errorMessage = datos.mensaje || 'Error desconocido al registrar árbitro.';
          this.presentAlert(this.errorMessage);
        } else {
          this.gracias("Gracias, ya puedes iniciar sesión");
          this.router.navigate(['loginorganizador']);
        }
      },
      error => {
        console.error('Error:', error);
        this.errorMessage = 'Error al enviar la solicitud al servidor: ' + error.message;
        this.presentAlert(this.errorMessage);
      }
    );
  }

  redirecRES() {
    this.router.navigate(['loginorganizador']);
  }
}
