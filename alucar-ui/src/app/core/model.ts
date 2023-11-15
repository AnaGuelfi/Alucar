import * as moment from 'moment';

export class Usuario {
  id!: number;
  cpf!: string;
  nome!: string;
  telefone!: string;
  email!: string;
  dataNascimento!: string;
  senha!: string;
  cnh = new CNH();
  endereco = new Endereco();

  static toJson(usuario: Usuario): any {
    usuario.dataNascimento = moment(usuario.dataNascimento).format('DD/MM/YYYY');
    //usuario.cnh.dataValidade = moment(usuario.cnh.dataValidade).format('DD/MM/YYYY');
    moment(usuario.cnh.dataValidade, 'DD/MM/YYYY').toDate();
    return {
      id: usuario.id,
      cpf: usuario.cpf,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      telefone: usuario.telefone,
      dataNascimento: usuario.dataNascimento,
      cnh: usuario.cnh,
      endereco: usuario.endereco
    }
  }
}

export class CNH {
  numeroRegistro!: string;
  dataValidade!: string;
  categoria!: string;
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


export class Aluguel {
  id!: number;
  valor!: number;
  localRetirada = new Endereco();
  localEntrega = new Endereco();
  dataRetirada!: string;
  periodo!: number;
  status!: string;
  veiculo: any;
  locatario: any;
  locador: any;

  constructor(veiculo_id: number, locatario_id: number, locador_id: number){
    this.locatario = new Usuario();
    this.locatario.id = locatario_id;
    this.locador = new Usuario();
    this.locador.id = locador_id;
    this.veiculo = new Veiculo(locador_id);
    this.veiculo = veiculo_id;
  }

  static toJson(aluguel: Aluguel): any {
    aluguel.dataRetirada = moment(aluguel.dataRetirada).format('DD/MM/YYYY');
    aluguel.veiculo.crlv.dataEmissao = moment(aluguel.veiculo.crlv.dataEmissao).format('DD/MM/YYYY');
    return {
      id: aluguel.id,
      status: 'CRIADO',
      valor: aluguel.valor,
      localRetirada: aluguel.localRetirada,
      localEntrega: aluguel.localEntrega,
      dataRetirada: aluguel.dataRetirada,
      periodo: aluguel.periodo,
      veiculo: aluguel.veiculo,
      locatario: aluguel.locatario,
      locador: aluguel.veiculo.usuario
    }
  }
}
