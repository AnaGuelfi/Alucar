import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { AuthService } from 'src/app/security/auth.service';
import { Aluguel, Endereco, Veiculo } from 'src/app/core/model';
import { AluguelService } from '../aluguel.service';
import { EnderecoService } from './../endereco.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VeiculoService } from 'src/app/veiculos/veiculo.service';

@Component({
  selector: 'app-aluguel-register',
  templateUrl: './aluguel-register.component.html',
  styleUrls: ['./aluguel-register.component.css']
})
export class AluguelRegisterComponent {
  combustiveis = [
    { label: 'Álcool', value: 'ALCOOL'},
    { label: 'Diesel', value: 'DIESEL'},
    { label: 'Elétrico', value: 'ELETRICO'},
    { label: 'Flex', value: 'FLEX'},
    { label: 'Gás Natural Veicular', value: 'GNV'},
    { label: 'Gasolina', value: 'GASOLINA'}
  ];

  status = [
    { label: 'Criado', value: 'CRIADO'},
    { label: 'Pendente', value: 'PENDENTE'},
    { label: 'Ativo', value: 'ATIVO'},
    { label: 'Cancelado', value: 'CANCELADO'},
    { label: 'Atrasado', value: 'ATRASADO'},
    { label: 'Concluído', value: 'CONCLUIDO'}
  ]

  veiculo = new Veiculo(this.auth.jwtPayload?.usuario_id);
  aluguel = new Aluguel(this.veiculo.id, this.auth.jwtPayload?.usuario_id, this.veiculo.usuario.id);

  constructor(
    private veiculoService: VeiculoService,
    private aluguelService: AluguelService,
    private enderecoService: EnderecoService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.params[`id`];
        this.loadVeiculo(id);
        this.title.setTitle('Cadastrar Aluguel');
    }

    loadVeiculo(id: number) {
      this.veiculoService.findById(id)
        .then(veiculo => {
          this.veiculo = veiculo;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    save(aluguelForm: NgForm) {
      this.aluguel.veiculo = this.createVeiculo(this.aluguel);

      this.aluguelService.add(this.aluguel)
        .then(addedAluguel => {
          this.messageService.add({ severity: 'success', detail: 'Aluguel adicionado com sucesso!' });
          this.router.navigate(['/alugueis']);
      })
      .catch(error => this.errorHandler.handle(error));
    }

    createVeiculo(aluguel: Aluguel) : Veiculo{
      const id = this.route.snapshot.params[`id`];
      this.veiculoService.findById(id)
        .then(veiculo => {
          this.veiculo = veiculo;
        })
        .catch(error => this.errorHandler.handle(error));

      return this.veiculo;
    }
}
