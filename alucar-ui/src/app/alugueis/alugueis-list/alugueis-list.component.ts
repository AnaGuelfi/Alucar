import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AluguelService } from '../aluguel.service';
import { AuthService } from 'src/app/security/auth.service';

import * as moment from 'moment';

@Component({
  selector: 'app-alugueis-list',
  templateUrl: './alugueis-list.component.html',
  styleUrls: ['./alugueis-list.component.css']
})
export class AlugueisListComponent {
  alugueis = [];
  usuario = this.auth.jwtPayload?.usuario_id;
  data_hoje = moment().format('DD/MM/YYYY');
  constructor(
    private aluguelService: AluguelService,
    private title: Title,
    private auth: AuthService){ }

  ngOnInit(): void {
    this.list();
    this.title.setTitle('Aluguéis');
  }

  list(): void {
    this.aluguelService.listByUser()
      .then(result => {
        this.alugueis = result;
      });
  }

}
