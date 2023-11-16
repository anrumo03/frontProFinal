import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearCitaComponent {
  constructor(private router: Router) {

  }
  enviarCita() {

  }

  back() {
    this.router.navigate(['paciente'])
  }
}
