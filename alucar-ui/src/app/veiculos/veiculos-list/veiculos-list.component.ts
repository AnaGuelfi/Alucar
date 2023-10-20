import { VeiculoService } from './../veiculo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.css']
})
export class VeiculosListComponent {
  veiculos = [];
  constructor(private VeiculoService: VeiculoService){ }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.VeiculoService.list()
      .then(result => {
        this.veiculos = result;
      });
  }
}
