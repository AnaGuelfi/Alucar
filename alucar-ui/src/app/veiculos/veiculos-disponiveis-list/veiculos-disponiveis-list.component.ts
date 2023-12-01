import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from './../../usuarios/usuario.service';
import { VeiculoService } from './../veiculo.service';
import { Usuario } from 'src/app/core/model';

@Component({
  selector: 'app-veiculos-disponiveis-list',
  templateUrl: './veiculos-disponiveis-list.component.html',
  styleUrls: ['./veiculos-disponiveis-list.component.css']
})
export class VeiculosDisponiveisListComponent {
    veiculos = [];
    user = new Usuario();
    constructor(
      private veiculoService: VeiculoService,
      private errorHandler: ErrorHandlerService,
      private usuarioService: UsuarioService,
      private title: Title){ }

    ngOnInit(): void {
      this.list();
      this.title.setTitle('Alugar um Veículo');
      this.usuarioService.listById()
        .then(result =>{
          this.user = result;
        })
        .catch(error => this.errorHandler.handle(error));


    }

    list(): void {
      this.veiculoService.listDisponiveis()
        .then(result => {
          this.veiculos = result;
        })
        .catch(error => this.errorHandler.handle(error));
    }

}
