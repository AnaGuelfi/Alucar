import * as moment from 'moment';

export class Usuario {
  id!: number;

  constructor(){
    this.id = 1;
  }
}

export class CRLV {
  renavam!: string;
  dataEmissao!: string;
  cidadeEmissao!: string;
  estadoEmissao!: string;

}

export class Veiculo {
  id!: number;
  marca!: string;
  modelo!: string;
  cor!: string;
  placa!: string;
  combustivel!: 'FLEX';
  opcionais!: 'AR_CONDICIONADO';
  quilometragem!: number;
  crlv = new CRLV();
  usuario = new Usuario();

  static toJson(veiculo: Veiculo): any {
    veiculo.crlv.dataEmissao = moment(veiculo.crlv.dataEmissao).format('DD/MM/YYYY');
    return {
      id: veiculo.id,
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      cor: veiculo.cor,
      placa: veiculo.placa,
      combustivel: veiculo.combustivel,
      opcionais: veiculo.opcionais,
      quilometragem: veiculo.quilometragem,
      crlv: veiculo.crlv,
      usuario: veiculo.usuario
    }
  }
}
