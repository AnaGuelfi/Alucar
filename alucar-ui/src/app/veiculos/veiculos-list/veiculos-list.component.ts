import { Component } from '@angular/core';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.css']
})
export class VeiculosListComponent {
  veiculos = [
    { marca: 'Honda', modelo: "Fit", cor: "branco", placa: "ABC3W89", combustivel: "Flex", quilometragem: "50000",
    renavam: "2-481014777", dataEmissao: '16/10/2023', cidadeEmissao: "São Carlos",
    estadoEmissao: "São Paulo", usuario: "Ana" }
  ];
}
