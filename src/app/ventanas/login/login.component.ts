import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  idUsuario: string;

  contrasenia: string;

  constructor() {
    this.idUsuario = '';
    this.contrasenia = '';
  }

  iniciarSesion() {
    if(this.idUsuario=="anrumito" && this.contrasenia == "hola123"){
      console.log('hola amiguito')
    }
  }
}
