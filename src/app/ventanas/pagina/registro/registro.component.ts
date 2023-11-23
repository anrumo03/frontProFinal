import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from '../../servicios/registroService';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'], // Ajusta la propiedad 'styleUrls'
  providers: [RegistroService],
})
export class RegistroComponent {
  tipoUsuario: string;
  contrasenia: string;
  cedula: string;
  nombre: string;
  mostrarMensaje: boolean = false;

  constructor(private router: Router, private registroService: RegistroService) {
    this.cedula = '';
    this.nombre = '';
    this.contrasenia = '';
    this.tipoUsuario = '';
  }

  registrarUsuario() {
    if (this.tipoUsuario == '' || this.nombre == '' || this.cedula == '' || this.contrasenia == '') {
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000);
    } else {
      // Crea un objeto con los datos del usuario
      const usuarioDTO = {
        tipoUsuario: this.tipoUsuario,
        nombre: this.nombre,
        cedula: this.cedula,
        contrasenia: this.contrasenia,
      };

      // Llama al servicio de registro para enviar los datos al servidor
      if (this.tipoUsuario === 'paciente') {
        this.registroService.registrarPaciente(usuarioDTO).subscribe(
          (response: any) => {
            console.log('Paciente registrado con éxito', response);
            this.router.navigate(['/login']);
          },
          (error: any) => {
            console.error('Error al registrar paciente', error);
            // Maneja el error aquí según tus necesidades
          }
        );
      } else if (this.tipoUsuario === 'medico') {
        this.registroService.registrarMedico(usuarioDTO).subscribe(
          (response: any) => {
            console.log('Médico registrado con éxito', response);
            this.router.navigate(['/login']);
          },
          (error: any) => {
            console.error('Error al registrar médico', error);
            // Maneja el error aquí según tus necesidades
          }
        );
      }
    }
  }

  backLogin() {
    this.router.navigate(['login']);
  }
}
