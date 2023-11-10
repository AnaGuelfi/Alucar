import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../security/auth.service';
import { Endereco } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  enderecoUrl = 'http://localhost:8080/endereco';

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

    add(endereco: Endereco): Promise<Endereco> {
      const headers = new HttpHeaders()
        .append('Content-Type', 'application/json');

      return this.http.post<any>(this.enderecoUrl, Endereco.toJson(endereco), { headers })
        .toPromise();
    }
}
