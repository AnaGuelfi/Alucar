import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../security/auth.service';


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
}
