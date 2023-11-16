import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-atender-cita',
  templateUrl: './atender-cita.component.html',
  styleUrl: './atender-cita.component.css'
})
export class AtenderCitaComponent {
  constructor(private router: Router) {

  }
  confirmarDiagnostico() {

  }

  back() {
    this.router.navigate(['medico'])
  }
}
