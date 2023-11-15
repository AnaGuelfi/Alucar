import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Endereco, Usuario } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usersUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  add(user: Usuario): Promise<Usuario> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.usersUrl, Usuario.toJson(user), { headers })
      .toPromise();
  }
}
