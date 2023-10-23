import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {
  alugueisUrl = 'http://localhost:8080/alugueis';

  constructor(private http: HttpClient) { }

  list(): Promise<any> {
    return this.http.get(`${this.alugueisUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
