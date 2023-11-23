// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent {
  cedula: string;
  contrasenia: string;
  tipo:string;
  mostrarMensaje: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {
    this.cedula = '';
    this.contrasenia = '';
    this.tipo = '';
  }

  iniciarSesion() {
    if (this.cedula == '' || this.contrasenia == '') {
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000);
    } else {
      // Crea un objeto con las credenciales del usuario
      const credenciales = {
        nombreUsuario: this.cedula,
        contrasenia: this.contrasenia,
        tipo: this.tipo,
      };

      this.loginService.autenticar(credenciales).subscribe(
        (response: any) => {
          console.log('Usuario autenticado con éxito', response);

          if (response.response.tipo === 'Paciente') {
            this.router.navigate(['/paciente']);
          } else if (response.response.tipo === 'Medico') {
            this.router.navigate(['/medico']);
          } else {
            console.error('Tipo de usuario no reconocido');
          }
        },
        (error: any) => {
          console.error('Error al autenticar usuario', error);
        }
      );
    }
  }

  olvidoContrasenia() {
    this.router.navigate(['recuperar'])
    return false;
  }

  registrarse() {
    this.router.navigate(['register'])
    return false;
  }
}
