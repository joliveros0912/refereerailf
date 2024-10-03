import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { ApiService } from 'src/app/services/api.service';
import { AlertController } from '@ionic/angular'; // Importa AlertController de Ionic

@Component({
  selector: 'app-organizador',
  templateUrl: './organizador.page.html',
  styleUrls: ['./organizador.page.scss'],
})
export class OrganizadorPage implements OnInit {

  form = new FormGroup({
    cedula: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  errorMessage: string = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private alertController: AlertController // Inyecta AlertController
  ) { }

  ngOnInit() {
  }

  async submit() {
    console.log(this.form.value);
  }

  async login() {
    if (this.form.valid) {
      const cedula1 = this.form.get('cedula')?.value;
      const password = this.form.get('password')?.value;

      if (!cedula1 || !password) {
        this.errorMessage = 'Por favor, completa todos los campos.';
        return;
      }

      try {
        // Obtener la contraseña almacenada en el backend por la cédula del organizador
        const userData = await this.apiService.getUser_cedula_O(cedula1).toPromise();

        if (userData && userData.contrasena) {
          // Hashear la contraseña ingresada para compararla con la almacenada
          const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

          // Comparar contraseñas hasheadas
          if (hashedPassword === userData.contrasena) {
            const cedula = this.form.get('cedula')?.value; // Obtener la cédula del formulario
            // Contraseñas coinciden, login exitoso
            this.router.navigate(['organizadorperfil' ,{ cedula: cedula }]);
          } else {
            // Contraseñas no coinciden, mostrar alerta
            await this.presentAlert('Credenciales incorrectas. Por favor, intenta de nuevo.');
          }
        } else {
          // Usuario no encontrado o contraseña no disponible, mostrar alerta
          await this.presentAlert('Usuario no encontrado. Por favor, registra una cuenta.');
        }
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        // Mostrar alerta de error general
        await this.presentAlert('Error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.');
      }
    } else {
      // Formulario inválido, mostrar alerta
      await this.presentAlert('Por favor, completa todos los campos.');
    }
  }

  async redirecRES() {
    this.router.navigate(['organizadorRegis']);
  }

  // Función para mostrar alerta con Ionic AlertController
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
