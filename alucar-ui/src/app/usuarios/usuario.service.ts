import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CNH, Endereco, Usuario } from '../core/model';
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
        //usuario.dataNascimento = moment(usuario.dataNascimento).format('DD/MM/YYYY');

        if(usuario.cnh != null){
          usuario.cnh.dataValidade = moment(usuario.cnh.dataValidade).format('DD/MM/YYYY');
        }

        return response;
      });
  }

  editById(): Promise<Usuario> {
    this.usuario_id = this.auth.jwtPayload?.usuario_id;
    return this.http.get(`${this.usersUrl}/${this.usuario_id}`)
      .toPromise()
      .then((response: any) =>{
        const usuario = response;

        usuario.dataNascimento = moment(usuario.dataNascimento, 'DD/MM/YYYY').toDate();
        //usuario.cnh.dataValidade = moment(usuario.cnh.dataValidade, 'DD/MM/YYYY').toDate();
        if(usuario.cnh != null){
          usuario.cnh.dataValidade = moment(usuario.cnh.dataValidade).format('DD/MM/YYYY');
        }

        return response;
      });
  }

  update(user: Usuario): Promise<Usuario> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    if(user.cnh != null){
      return this.http.put<Usuario>(`${this.usersUrl}/${user.id}`, Usuario.toJsonUpdate(user), { headers })
        .toPromise()
        .then((response: any) => {
          const updated = response;
          return updated;
        });
    } else {
      return this.http.put<Usuario>(`${this.usersUrl}/${user.id}`, Usuario.toJsonUpdateWithoutCNH(user), { headers })
        .toPromise()
        .then((response: any) => {
          const updated = response;
          return updated;
        });
    }
  }

  updateDataValidadeCNH(user: Usuario): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.usersUrl}/${user.id}/datacnh`, Usuario.dataValidadeToJson(user), { headers })
      .toPromise();
  }

  saveCNH(cnh: CNH): Promise<any> {
    this.usuario_id = this.auth.jwtPayload?.usuario_id;
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.usersUrl}/${this.usuario_id}/cnh`, Usuario.cnhToJson(cnh), { headers })
      .toPromise();
  }
}
