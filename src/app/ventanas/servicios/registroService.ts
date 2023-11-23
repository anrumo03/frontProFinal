// registro.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private registroUrl = 'http://localhost:8080/register';

  constructor(private http: HttpClient) {}

  // Método para realizar el registro de un paciente
  registrarPaciente(usuarioDTO: any): Observable<any> {
    return this.http.post<any>(`${this.registroUrl}/paciente`, usuarioDTO);
  }

  // Método para realizar el registro de un médico
  registrarMedico(usuarioDTO: any): Observable<any> {
    return this.http.post<any>(`${this.registroUrl}/medico`, usuarioDTO);
  }
}
