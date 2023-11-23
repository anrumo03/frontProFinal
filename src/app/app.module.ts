import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { routes } from './app.routes';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./ventanas/pagina/login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RegistroComponent} from "./ventanas/pagina/registro/registro.component";
import {CitasComponent} from "./ventanas/pagina/citas/citas.component";
import {MedicoComponent} from "./ventanas/pagina/medico/medico.component";
import {AtenderCitaComponent} from "./ventanas/pagina/atender-cita/atender-cita.component";
import {PacienteComponent} from "./ventanas/pagina/paciente/paciente.component";
import {CrearCitaComponent} from "./ventanas/pagina/crear-cita/crear-cita.component";
import {recuperarContraComponent} from "./ventanas/pagina/recuperar-contra/recuperar-contra.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CitasComponent,
    MedicoComponent,
    AtenderCitaComponent,
    PacienteComponent,
    CrearCitaComponent,
    recuperarContraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],

  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

