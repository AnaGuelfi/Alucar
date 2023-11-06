import { Component } from '@angular/core';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VeiculoService } from './../veiculo.service';

@Component({
  selector: 'app-veiculos-disponiveis-list',
  templateUrl: './veiculos-disponiveis-list.component.html',
  styleUrls: ['./veiculos-disponiveis-list.component.css']
})
export class VeiculosDisponiveisListComponent {
    veiculos = [];
    constructor(
      private VeiculoService: VeiculoService,
      private errorHandler: ErrorHandlerService
      ){ }

    ngOnInit(): void {
      this.list();
    }

    list(): void {
      this.VeiculoService.listDisponiveis()
        .then(result => {
          this.veiculos = result;
        })
        .catch(error => this.errorHandler.handle(error));
    }

}
