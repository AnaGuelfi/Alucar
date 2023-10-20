import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculosUrl = 'http://localhost:8080/veiculos';

  constructor(private http: HttpClient) { }

  list(): Promise<any> {
    return this.http.get(`${this.veiculosUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
