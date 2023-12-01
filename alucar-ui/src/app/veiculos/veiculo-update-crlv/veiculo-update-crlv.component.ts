import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Veiculo } from './../../core/model';
import { VeiculoService } from './../veiculo.service';

@Component({
  selector: 'app-veiculo-update-crlv',
  templateUrl: './veiculo-update-crlv.component.html',
  styleUrls: ['./veiculo-update-crlv.component.css']
})
export class VeiculoUpdateCrlvComponent {
  veiculo = new Veiculo(this.auth.jwtPayload?.usuario_id);

  constructor(
    private veiculoService: VeiculoService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  loadVeiculo(id: number) {
    this.veiculoService.findById(id)
      .then(veiculo => {
        this.veiculo = veiculo;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params[`id`];
    if(id != 'new'){
      this.loadVeiculo(id);
    }
  }

  updateRenavam(veiculoForm: NgForm): void {
    this.veiculoService.updateRenavam(this.veiculo)
      .then( veiculo => {
        this.messageService.add({ severity: 'success', detail: 'Data de Emissão do Renavam Editada com Sucesso!' });
        this.router.navigate(['/veiculos/crlv', this.veiculo.id]);
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
