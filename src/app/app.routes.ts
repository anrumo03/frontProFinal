import { Routes } from '@angular/router';
import {LoginComponent} from "./ventanas/login/login.component";
import {RegistroComponent} from "./ventanas/registro/registro.component";
import {MedicoComponent} from "./ventanas/medico/medico.component";
import {AtenderCitaComponent} from "./ventanas/atender-cita/atender-cita.component";
import {PacienteComponent} from "./ventanas/paciente/paciente.component";
import {CrearCitaComponent} from "./ventanas/crear-cita/crear-cita.component";
import {recuperarContraComponent} from "./ventanas/recuperar-contra/recuperar-contra.component";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'medico', component: MedicoComponent},
  {path: 'atender', component: AtenderCitaComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'crear', component: CrearCitaComponent},
  {path: 'recuperar', component: recuperarContraComponent},

];
