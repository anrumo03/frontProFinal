import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent {

  constructor(private router:Router) {
  }

  pedirCita() {
    this.router.navigate(['crear'])
  }

  cerrarSesion() {
    this.router.navigate(['login'])
  }
}
