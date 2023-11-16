import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {


  constructor(private router: Router) {
  }
  atenderCita() {
    this.router.navigate(['atender'])
  }
}
