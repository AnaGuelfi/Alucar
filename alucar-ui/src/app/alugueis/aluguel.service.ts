import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../security/auth.service';

import { Aluguel } from '../core/model';

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


}
