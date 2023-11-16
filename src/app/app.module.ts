import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { routes } from './app.routes';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./ventanas/login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RegistroComponent} from "./ventanas/registro/registro.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],

  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

