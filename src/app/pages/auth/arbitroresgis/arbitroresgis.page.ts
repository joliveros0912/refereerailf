import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AlertController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-arbitroresgis',
  templateUrl: './arbitroresgis.page.html',
  styleUrls: ['./arbitroresgis.page.scss'],
})
export class ArbitroresgisPage implements OnInit {
  form = new FormGroup({
    nombreCompleto: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    cedula: new FormControl("", [Validators.required]),
    celular: new FormControl("", [Validators.required]),
    disciplina: new FormControl("", [Validators.required]),
    tipoArbitro: new FormControl("", [Validators.required]),
    ciudad: new FormControl("", [Validators.required]),
    localidad: new FormControl("", [Validators.required]),
    perfilDeportivo: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    password: new FormControl("", [Validators.required]),
  });

  errorMessage: string = '';

  constructor(private router: Router, private servicio: ApiService, private alertController: AlertController) { }

  ngOnInit() {}

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

  onSubmit() {
    if (this.form.valid) {
      // Obtén el valor de la contraseña y asegúrate de que no sea null o undefined
      const passwor= this.form.get('password')?.value || '';

      // Hashear la contraseña
      const hashedPassword = CryptoJS.SHA256(passwor).toString(CryptoJS.enc.Hex);

      // Crea un nuevo objeto formData con la contraseña hasheada
      const formData = {
        ...this.form.value,
        password: hashedPassword
      };

      // Llama al método agregar_arbitro con el formData
      this.agregar_arbitro(formData);
    } else {
      // Manejo de errores de validación del formulario
      console.log("Formulario inválido");
    }
  }

  agregar_arbitro(formData: any) {
    console.log('Form Values:', formData);

    if (this.form.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.';
      this.presentAlert(this.errorMessage);
      return;
    }

    // Llamar al servicio para agregar el árbitro
    this.servicio.agregar(formData).subscribe(
      datos => {
        if (datos.resultado === 'OK') {
          // Redirigir a otra página después de un registro exitoso
          this.errorMessage = datos.mensaje || 'Error desconocido al registrar árbitro.';
          this.presentAlert(this.errorMessage);
        } else {
          // Mostrar mensaje de éxito y redirigir
          this.gracias("Gracias, ya puedes iniciar sesión");
          this.router.navigate(['arbitro']);
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
    this.router.navigate(['arbitro']);
  }
}
