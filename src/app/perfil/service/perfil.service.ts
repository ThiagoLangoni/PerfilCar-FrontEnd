import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  private baseUrl = 'http://localhost:8080/perfil';

  constructor(private http: HttpClient) { }

  getPerfil(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/perfil/${id}`);
  }

  createPerfil(perfil: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/perfil`, perfil);
  }

  updatePerfil(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/perfil/`, value);
  }

  deletePerfil(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/perfil/${id}`, { responseType: 'text' });
  }

  getPerfilList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/perfis`);
  }
}