import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/security/auth.service';
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

  opcionais = [
    { label: 'Ar-Condicionado', value: 'AR_CONDICIONADO'},
    { label: 'Quatro Portas', value: 'QUATRO_PORTAS'},
    { label: 'Rádio e/ou GPS', value: 'RADIO_GPS'},
    { label: 'Vidro elétrico, travas elétricas e alarme', value: 'TRIO_ELETRICO'}
  ]

  veiculo = new Veiculo(this.auth.jwtPayload?.usuario_id);

  constructor(
    private veiculoService: VeiculoService,
    private auth: AuthService
    ){}

  save(activityForm: NgForm) {
    this.veiculoService.add(this.veiculo)
      .then(() => {
        console.log('Veículo adicionado com sucesso!');
        activityForm.reset();
        this.veiculo = new Veiculo(this.auth.jwtPayload?.usuario_id);
      })
      .catch(erro => console.log(erro));
  }
}
