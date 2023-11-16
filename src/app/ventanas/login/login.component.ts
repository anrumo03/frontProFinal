import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  idUsuario: string;

  contrasenia: string;

  constructor(private router:Router) {
    this.idUsuario = '';
    this.contrasenia = '';
  }

  iniciarSesion() {
    if(this.idUsuario=="anrumito" && this.contrasenia == "hola123"){
      this.router.navigate(['medico'])
    }else if (this.idUsuario=="isa" && this.contrasenia == "hola123"){
      this.router.navigate(['paciente'])
    }
  }

  olvidoContrasenia(){
    this.router.navigate(['recuperar'])
    return false;
  }

  registrarse(){

    this.router.navigate(['register'])
    return false;
  }
}
