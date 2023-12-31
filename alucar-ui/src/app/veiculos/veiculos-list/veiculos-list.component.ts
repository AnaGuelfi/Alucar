import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VeiculoService } from './../veiculo.service';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.css']
})
export class VeiculosListComponent {
  veiculos = [];
  constructor(
    private VeiculoService: VeiculoService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    public auth: AuthService,
    private title: Title
    ){ }

  ngOnInit(): void {
    this.list();
    this.title.setTitle('Meus Veículos');

  }

  list(): void {
    this.VeiculoService.listByUser()
      .then(result => {
        this.veiculos = result;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  confirmRemoval(veiculo: any): void {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remove(veiculo);
      }
    });
  }

  remove(veiculo: any): void {
    this.VeiculoService.remove(veiculo.id)
      .then(() => {
        this.list();
        this.messageService.add({ severity: 'success', detail: 'Veículo excluído com sucesso!' });
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
