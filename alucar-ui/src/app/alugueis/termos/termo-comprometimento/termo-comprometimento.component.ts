import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AluguelService } from '../../aluguel.service';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-termo-comprometimento',
  templateUrl: './termo-comprometimento.component.html',
  styleUrls: ['./termo-comprometimento.component.css']
})
export class TermoComprometimentoComponent {
  alugueis = [];
  usuario = this.auth.jwtPayload?.usuario_id;
  aluguel_id = this.route.snapshot.params[`id`];

  constructor(
    private aluguelService: AluguelService,
    private title: Title,
    private auth: AuthService,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.list();
    this.title.setTitle('Termo de Comprometimento');
  }

  list(): void {
    this.aluguelService.listByUser()
      .then(result => {
        this.alugueis = result;
      });
  }
}
