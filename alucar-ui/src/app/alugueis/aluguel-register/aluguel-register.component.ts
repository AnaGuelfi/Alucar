import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    private router: Router
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.params[`id`];
        this.loadVeiculo(id);

    }

    loadVeiculo(id: number) {
      this.veiculoService.findById(id)
        .then(veiculo => {
          this.veiculo = veiculo;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    save(aluguelForm: NgForm) {

      this.enderecoService.add(this.createEndereco(this.aluguel, 'localRetirada')).catch(error => this.errorHandler.handle(error));
      this.enderecoService.add(this.createEndereco(this.aluguel, 'localEntrega')).catch(error => this.errorHandler.handle(error));

      this.aluguel.localRetirada = this.createEndereco(this.aluguel, 'localRetirada');
      this.aluguel.localEntrega = this.createEndereco(this.aluguel, 'localEntrega');

      this.aluguelService.add(this.aluguel)
        .then(addedAluguel => {
          this.messageService.add({ severity: 'success', detail: 'Aluguel adicionado com sucesso!' });
          this.router.navigate(['/alugueis', addedAluguel.id]);
      })
      .catch(error => this.errorHandler.handle(error));
    }

    createEndereco(aluguel: Aluguel, tipo: String): Endereco{
      var endereco = new Endereco();
      var aux = new Endereco();
      if(tipo == "localRetirada"){
        aux = this.aluguel.localRetirada;
      } else{
        aux = this.aluguel.localEntrega;
      }
      endereco.bairro = aux.bairro;
      endereco.cep = aux.cep;
      endereco.cidade = aux.cidade
      endereco.estado = aux.estado;
      endereco.logradouro = aux.logradouro;
      endereco.numero = aux.numero;

      return endereco;
    }
}
