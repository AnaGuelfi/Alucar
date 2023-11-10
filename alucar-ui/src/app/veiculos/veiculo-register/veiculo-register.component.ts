import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Veiculo } from 'src/app/core/model';
import { VeiculoService } from '../veiculo.service';



@Component({
  selector: 'app-veiculo-register',
  templateUrl: './veiculo-register.component.html',
  styleUrls: ['./veiculo-register.component.css']
})
export class VeiculoRegisterComponent {
  combustiveis = [
    { label: 'Álcool', value: 'ALCOOL'},
    { label: 'Diesel', value: 'DIESEL'},
    { label: 'Elétrico', value: 'ELETRICO'},
    { label: 'Flex', value: 'FLEX'},
    { label: 'Gás Natural Veicular', value: 'GNV'},
    { label: 'Gasolina', value: 'GASOLINA'}
  ];

  veiculo = new Veiculo(this.auth.jwtPayload?.usuario_id);

  constructor(
    private veiculoService: VeiculoService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.params[`id`];
      if(id != 'new'){
        this.loadVeiculo(id);
      }
    }

    get editing(): boolean {
      return Boolean(this.veiculo.id);
    }

    loadVeiculo(id: number) {
      this.veiculoService.findById(id)
        .then(veiculo => {
          this.veiculo = veiculo;
        })
        .catch(error => this.errorHandler.handle(error));
    }

  save(veiculoForm: NgForm) {
    if(this.editing){
      this.updateVeiculo(veiculoForm);
    }else{
      this.addVeiculo(veiculoForm);
    }
  }

  updateVeiculo(veiculoForm: NgForm) {
    this.veiculoService.update(this.veiculo)
      .then( veiculo => {
        this.messageService.add({ severity: 'success', detail: 'Veículo editado com sucesso!' });
        this.veiculo = veiculo;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  addVeiculo(veiculoForm: NgForm) {
    this.veiculoService.add(this.veiculo)
      .then(addedVeiculo => {
        this.messageService.add({ severity: 'success', detail: 'Veículo adicionado com sucesso!' });
        this.loadVeiculo(addedVeiculo.id);
        this.router.navigate(['/veiculos', addedVeiculo.id]);
      })
      .catch(error => this.errorHandler.handle(error));

  }

  new(veiculoForm: NgForm){
    this.veiculo = new Veiculo(this.auth.jwtPayload?.usuario_id);
    veiculoForm.reset();
    this.router.navigate(['/veiculos/new']);
  }
}
