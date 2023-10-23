import { Component } from '@angular/core';

@Component({
  selector: 'app-alugueis-list',
  templateUrl: './alugueis-list.component.html',
  styleUrls: ['./alugueis-list.component.css']
})
export class AlugueisListComponent {
  alugueis = [
    { valor: '300', localRetirada: 2, localEntrega: 1, dataRetirada: '08/10/2023',
    dataEntrega: '09/10/2023', dataPrevistaEntrega: '09/10/2023', periodo: 3, locador: 2, locatario: 1, veiculo: 2,
    mensagemComprometimento: 'Eu, Stefano, portador do CPF, 323.378.228-42 declaro que me responsabilizo em entregar o veículo selecionado por, Ana, de CPF 473.322.598-93, nas condições informadas nas fotos cadastradas. Veículo de placa CDE3W89 e Renavam 2-481014888.',
    assinaturaLocador: '09/10/2023',
    mensagemConsentimento: 'Eu, Ana, portador do CPF, 473.322.598-93 declaro que me responsabilizo por possíveis avarias, roubos e furtos que acontecerem com o veículo deste aluguel, de propriedade de Stefano, de CPF 323.378.228-42. O veículo alugado possui a placa CDE3W89 e Renavam 2-481014888.Caso tenha atraso na devolução do veículo, será cobrada uma taxa de multa de 10% do valor acordado a cada dia de atraso.',
    assinaturaLocatario: '09/10/2023',
    valorMulta: null,
    status: 'CONCLUIDO'
  }
  ];
}
