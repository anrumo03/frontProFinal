import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private router: Router) {
    this.cedula = '';
    this.nombre = '';
    this.contrasenia = '';
    this.tipoUsuario = '';
  }

  registrarUsuario() {
    this.backLogin();
  }

  backLogin() {

    this.router.navigate(['login'])
  }
}
