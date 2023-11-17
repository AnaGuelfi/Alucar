import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../security/auth.service';

import { Aluguel } from '../core/model';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {
  email: any;

  alugueisUrl = 'http://localhost:8080/alugueis';

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

  list(): Promise<any> {
    return this.http.get(`${this.alugueisUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  listByUser(): Promise<any> {
    this.email = this.auth.jwtPayload?.user_name;
    return this.http.get(`${this.alugueisUrl}/usuario/${this.email}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  add(aluguel: Aluguel): Promise<Aluguel> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.alugueisUrl, Aluguel.toJson(aluguel), { headers })
      .toPromise();

  }

  assinarTermoComprometimento(aluguel: Aluguel): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.alugueisUrl}/${aluguel.id}/comprometimento`, { headers })
      .toPromise();
  }

  entregarVeiculo(aluguel: Aluguel): Promise<any>{
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.alugueisUrl}/${aluguel.id}/entrega`, { headers })
      .toPromise();
  }


  findById(id: number): Promise<Aluguel> {
    return this.http.get<Aluguel>(`${this.alugueisUrl}/${id}`)
      .toPromise()
      .then((response: any) => {
        const aluguel = response;

        aluguel.dataRetirada = moment(aluguel.dataRetirada, 'DD/MM/YYYY').toDate();
        aluguel.dataEntrega = moment(aluguel.dataEntrega, 'DD/MM/YYYY').toDate();
        aluguel.dataPrevistaEntrega = moment(aluguel.dataPrevistaEntrega, 'DD/MM/YYYY').toDate();
        aluguel.assinaturaLocador = moment(aluguel.assinaturaLocador, 'DD/MM/YYYY').toDate();

        return aluguel;
      });
  }
}
