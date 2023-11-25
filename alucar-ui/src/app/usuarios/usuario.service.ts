import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Endereco, Usuario } from '../core/model';
import { AuthService } from '../security/auth.service';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario_id: any;

  usersUrl = 'http://localhost:8080/usuarios';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  add(user: Usuario): Promise<Usuario> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.usersUrl, Usuario.toJson(user), { headers })
      .toPromise();
  }

  listById(): Promise<Usuario> {
    this.usuario_id = this.auth.jwtPayload?.usuario_id;
    return this.http.get(`${this.usersUrl}/${this.usuario_id}`)
      .toPromise()
      .then((response: any) =>{
        const usuario = response;

        if(usuario.cnh != null){
          usuario.dataNascimento = moment(usuario.dataNascimento).format('DD/MM/YYYY');
          usuario.cnh.dataValidade = moment(usuario.cnh.dataValidade).format('DD/MM/YYYY');
        }

        return response;
      });
  }
}
