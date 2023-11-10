import * as moment from 'moment';
import { AuthService } from '../security/auth.service';

export class Usuario {
  id!: number;
}

export class CRLV {
  renavam!: string;
  dataEmissao!: string;
  cidadeEmissao!: string;
  estadoEmissao!: string;

}

export class Endereco {
  id!: number;
  logradouro!: string;
  numero!: number;
  bairro!: string;
  cidade!: string;
  cep!: string;
  estado!: string;

  static toJson(endereco: Endereco): any {
    return {
      id: endereco.id,
      logradouro: endereco.logradouro,
      numero: endereco.numero,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      cep: endereco.cep,
      estado: endereco.estado
    }
  }
}

export class Aluguel {
  id!: number;
  valor!: number;
  localRetirada = new Endereco();
  localEntrega = new Endereco();
  dataRetirada!: string;
  periodo!: number;
  veiculo: any;
  locatario: any;
  locador: any;

  constructor(veiculo_id: number, locatario_id: number, locador_id: number){
    this.locatario = new Usuario();
    this.locatario = locatario_id;
    this.locador = new Usuario();
    this.locador = locador_id;
    this.veiculo = new Veiculo(locador_id);
    this.veiculo = veiculo_id;
  }

  static toJson(aluguel: Aluguel): any {
    return {
      id: aluguel.id,
      valor: aluguel.valor,
      localRetirada: aluguel.localRetirada,
      localEntrega: aluguel.localEntrega,
      dataRetirada: moment(aluguel.dataRetirada).format('DD/MM/YYYY'),
      periodo: aluguel.periodo,
      veiculo: aluguel.veiculo,
      locatario: aluguel.locatario,
      locador: aluguel.veiculo.usuario
    }
  }
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
  usuario: any;
  crlv = new CRLV();

  constructor(usuario_id: number){
    this.usuario = new Usuario();
    this.usuario.id = usuario_id;
  }

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

  static dataEmissaoToJson(veiculo: Veiculo): any {
    return moment(veiculo.crlv.dataEmissao, 'DD/MM/YYYY').toDate();
  }
}
