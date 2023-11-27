import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VeiculoService } from './../veiculo.service';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-crlv',
  templateUrl: './crlv.component.html',
  styleUrls: ['./crlv.component.css']
})
export class CrlvComponent {
  veiculos = [];
  veiculo_id = this.route.snapshot.params[`id`];
  constructor(
    private VeiculoService: VeiculoService,
    private errorHandler: ErrorHandlerService,
    public auth: AuthService,
    private title: Title,
    private route: ActivatedRoute
    ){ }

  ngOnInit(): void {
    this.list();
    this.title.setTitle('CRLV');
  }

  list(): void {
    this.VeiculoService.listByUser()
      .then(result => {
        this.veiculos = result;
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
