
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { AluguelService } from './../aluguel.service';
import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Aluguel, Veiculo } from 'src/app/core/model';

@Component({
  selector: 'app-aluguel-termo-comprometimento',
  templateUrl: './aluguel-termo-comprometimento.component.html',
  styleUrls: ['./aluguel-termo-comprometimento.component.css']
})

export class AluguelTermoComprometimentoComponent {
  veiculo = new Veiculo(this.auth.jwtPayload?.usuario_id);
  aluguel = new Aluguel(this.veiculo.id, this.auth.jwtPayload?.usuario_id, this.veiculo.usuario.id);

  constructor(
    private aluguelService: AluguelService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  loadAluguel(id: number) {
    this.aluguelService.findById(id)
      .then(aluguel => {
        this.aluguel = aluguel;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params[`id`];
    if(id != 'new'){
      this.loadAluguel(id);
    }
  }

  assinarTermoComprometimento(aluguelForm: NgForm): void {
    this.aluguelService.assinarTermoComprometimento(this.aluguel)
      .then( aluguel => {
        this.messageService.add({ severity: 'success', detail: 'Termo de Comprometimento Assinado!' });
        this.router.navigate(['/alugueis']);
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
