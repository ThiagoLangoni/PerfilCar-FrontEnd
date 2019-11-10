import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private baseUrl = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario/${id}`);
  }

  createUsuario(perfil: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/usuario`, perfil);
  }

  updateUsuario(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/usuario/`, value);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/usuario/${id}`, { responseType: 'text' });
  }

  getUsuarioList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);
  }
}
