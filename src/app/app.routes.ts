import { Routes } from '@angular/router';
import {LoginComponent} from "./ventanas/login/login.component";
import {RegistroComponent} from "./ventanas/registro/registro.component";
import {MedicoComponent} from "./ventanas/medico/medico.component";
import {AtenderCitaComponent} from "./ventanas/atender-cita/atender-cita.component";
import {PacienteComponent} from "./ventanas/paciente/paciente.component";
import {CrearCitaComponent} from "./ventanas/crear-cita/crear-cita.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'medico', component: MedicoComponent},
  {path: 'atender', component: AtenderCitaComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'crear', component: CrearCitaComponent},
  {path: '**', redirectTo:'/login', pathMatch: 'full'},
];
