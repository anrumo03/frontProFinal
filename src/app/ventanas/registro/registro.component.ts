import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  tipoUsuario: string;
  contrasenia: string;
  cedula: string;
  nombre: string;
  mostrarMensaje: boolean = false;

  constructor(private router: Router) {
    this.cedula = '';
    this.nombre = '';
    this.contrasenia = '';
    this.tipoUsuario = '';
  }

  registrarUsuario() {
    if(this.tipoUsuario == '' || this.nombre == '' || this.cedula == '' || this.contrasenia == ''){
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000);
    }else{

    }
  }

  backLogin() {
    this.router.navigate(['login'])
  }
}
