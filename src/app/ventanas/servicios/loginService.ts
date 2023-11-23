import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = 'http://localhost:8080/autenticacion';

  constructor(private http: HttpClient) {}

  // Método para realizar la autenticación
  autenticar(credenciales: any): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}/login`, credenciales);
  }
}
