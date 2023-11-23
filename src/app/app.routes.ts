import { Routes } from '@angular/router';
import {LoginComponent} from "./ventanas/pagina/login/login.component";
import {RegistroComponent} from "./ventanas/pagina/registro/registro.component";
import {MedicoComponent} from "./ventanas/pagina/medico/medico.component";
import {AtenderCitaComponent} from "./ventanas/pagina/atender-cita/atender-cita.component";
import {PacienteComponent} from "./ventanas/pagina/paciente/paciente.component";
import {CrearCitaComponent} from "./ventanas/pagina/crear-cita/crear-cita.component";
import {recuperarContraComponent} from "./ventanas/pagina/recuperar-contra/recuperar-contra.component";

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
