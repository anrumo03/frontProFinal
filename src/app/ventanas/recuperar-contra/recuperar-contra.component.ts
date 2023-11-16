import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.component.html',
  styleUrl: './recuperar-contra.component.css'
})
export class recuperarContraComponent {

  constructor(private router:Router) {
  }

  enviarInstrucciones(){

  }

  back() {
    this.router.navigate(['login'])
  }
}
