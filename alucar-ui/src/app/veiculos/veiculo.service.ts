import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../security/auth.service';
import { Veiculo } from '../core/model';


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
}
