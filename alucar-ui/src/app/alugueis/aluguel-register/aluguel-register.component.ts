import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Aluguel, Veiculo } from 'src/app/core/model';
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

  opcionais = [
    { label: 'Ar-Condicionado', value: 'AR_CONDICIONADO'},
    { label: 'Quatro Portas', value: 'QUATRO_PORTAS'},
    { label: 'Rádio e/ou GPS', value: 'RADIO_GPS'},
    { label: 'Vidro elétrico, travas elétricas e alarme', value: 'TRIO_ELETRICO'}
  ]

  veiculo = new Veiculo(this.auth.jwtPayload?.usuario_id);
  aluguel = new Aluguel(this.auth.jwtPayload?.usuario_id);

  constructor(
    private veiculoService: VeiculoService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
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

    save(veiculoForm: NgForm) {

    }
}
