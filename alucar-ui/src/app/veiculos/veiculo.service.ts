import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../security/auth.service';
import { Veiculo } from '../core/model';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  email: any;

  veiculosUrl = 'http://localhost:8080/veiculos';

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

  list(): Promise<any> {
    return this.http.get(`${this.veiculosUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  listDisponiveis(): Promise<any> {
    return this.http.get(`${this.veiculosUrl}/disponiveis`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  listByUser(): Promise<any> {
    this.email = this.auth.jwtPayload?.user_name;
    return this.http.get(`${this.veiculosUrl}/usuario/${this.email}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  add(veiculo: Veiculo): Promise<Veiculo> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.veiculosUrl, Veiculo.toJson(veiculo), { headers })
      .toPromise();
  }

  remove(id: number): Promise<any> {
    return this.http.delete(`${this.veiculosUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  update(veiculo: Veiculo): Promise<Veiculo> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Veiculo>(`${this.veiculosUrl}/${veiculo.id}`, Veiculo.toJson(veiculo), { headers })
      .toPromise()
      .then((response: any) => {
        const updated = response;

        updated.crlv.dataEmissao = moment(updated.crlv.dataEmissao, 'DD/MM/YYYY').toDate();

        return updated;
      });
  }

  updateRenavam(veiculo: Veiculo): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.veiculosUrl}/${veiculo.id}/crlv`, Veiculo.dataEmissaoToJson(veiculo), { headers })
      .toPromise();
  }

  findById(id: number): Promise<Veiculo> {
    return this.http.get<Veiculo>(`${this.veiculosUrl}/${id}`)
      .toPromise()
      .then((response: any) => {
        const veiculo = response;

        veiculo.crlv.dataEmissao = moment(veiculo.crlv.dataEmissao, 'DD/MM/YYYY').toDate();

        return veiculo;
      });
  }

}
