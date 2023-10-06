CREATE TABLE IF NOT EXISTS ENDERECO(
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	logradouro VARCHAR(100) NOT NULL,
	numero INT NOT NULL,
	bairro VARCHAR(50) NOT NULL,
	cep VARCHAR(10) NOT NULL,
	cidade VARCHAR(50) NOT NULL,
	estado VARCHAR(25) NOT NULL
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

INSERT INTO ENDERECO(id, logradouro, numero, bairro, cep, cidade, estado) VALUES(1, 'Rua dos Bobos', 0, 'Jardins', '01153-000', 'São Paulo', 'São Paulo');
INSERT INTO ENDERECO(id, logradouro, numero, bairro, cep, cidade, estado) VALUES(2, 'Avenida Castro Alves', 2000, 'Jardim Morumbi', '14801-460', 'Araraquara', 'São Paulo');



CREATE TABLE IF NOT EXISTS USUARIO(
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	CPF VARCHAR(15) NOT NULL,
	nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	data_nascimento DATE NOT NULL,
	senha VARCHAR(100) NOT NULL,
	numero_registro VARCHAR(20),
	categoria VARCHAR(5),
	data_validade DATE,
	id_endereco BIGINT(20) NOT NULL,
	CONSTRAINT cpf_unique UNIQUE (CPF),
	CONSTRAINT email_unique UNIQUE (email),
	CONSTRAINT numero_registro_unique UNIQUE (numero_registro),
	FOREIGN KEY (id_endereco) REFERENCES ENDERECO(id)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

INSERT INTO USUARIO(id, CPF, nome, telefone, email, data_nascimento, senha, numero_registro, categoria, data_validade, id_endereco) VALUES(1, '473.322.598-93', 'Ana', '12345689', 'ana@email.com', '2002-08-03', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 'SP123456789', 'A', '2029-09-04', 1);
INSERT INTO USUARIO(id, CPF, nome, telefone, email, data_nascimento, senha, id_endereco) VALUES(2, '323.378.228-42', 'Stefano', '12348689', 'stefano@email.com', '2001-06-03', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', 2);


CREATE TABLE IF NOT EXISTS VEICULO(
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	marca VARCHAR(50) NOT NULL,
	modelo VARCHAR(50) NOT NULL,
	cor VARCHAR(50) NOT NULL,
	placa VARCHAR(20) NOT NULL,
	combustivel VARCHAR(50) NOT NULL,
	opcionais VARCHAR(50),
	quilometragem BIGINT(20),
	imagem_frontal LONGBLOB,
	imagem_lateral LONGBLOB,
	imagem_traseira LONGBLOB,
	imagem_interior LONGBLOB,
	imagem_pneus LONGBLOB,
	renavam VARCHAR(20) NOT NULL,
	data_emissao DATE NOT NULL,
	cidade_emissao VARCHAR(50) NOT NULL,
	estado_emissao VARCHAR(25) NOT NULL,
	id_usuario BIGINT(20) NOT NULL,
	CONSTRAINT placa_unique UNIQUE (placa),
	CONSTRAINT renavam_unique UNIQUE (renavam),
	FOREIGN KEY (id_usuario) REFERENCES USUARIO(id)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

INSERT INTO VEICULO(id, marca, modelo, cor, placa, combustivel, quilometragem, renavam, data_emissao, cidade_emissao, estado_emissao, id_usuario) VALUES(1, 'Honda', 'Fit', 'branco', 'ABC3W89', 'FLEX', 50000, '2-481014777', '2023-05-02', 'São Carlos', 'São Paulo', 1);
INSERT INTO VEICULO(id, marca, modelo, cor, placa, combustivel, quilometragem, renavam, data_emissao, cidade_emissao, estado_emissao, id_usuario) VALUES(2, 'Fiat', 'Palio', 'preto', 'CDE3W89', 'ALCOOL', 80000, '2-481014888', '2023-07-09', 'Ribeirão Preto', 'São Paulo', 2);



CREATE TABLE IF NOT EXISTS ALUGUEL(
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	valor FLOAT NOT NULL,
	local_retirada BIGINT(20) NOT NULL,
	local_entrega BIGINT(20) NOT NULL,
	data_retirada DATE NOT NULL,
	data_entrega DATE,
	data_prevista_entrega DATE NOT NULL,
	periodo BIGINT(20) NOT NULL,
	locador BIGINT(20) NOT NULL,
	locatario BIGINT(20) NOT NULL,
	veiculo BIGINT(20) NOT NULL,
	mensagem_comprometimento TEXT,
	assinatura_locador DATE,
	mensagem_consentimento TEXT NOT NULL,
	assinatura_locatario DATE,
	valor_multa DOUBLE,
	status VARCHAR(50) NOT NULL,
	FOREIGN KEY (local_retirada) REFERENCES ENDERECO(id),
	FOREIGN KEY (local_entrega) REFERENCES ENDERECO(id),
	FOREIGN KEY (locador) REFERENCES USUARIO(id),
	FOREIGN KEY (locatario) REFERENCES USUARIO(id),
	FOREIGN KEY (veiculo) REFERENCES VEICULO(id)
)ENGINE=INNODB DEFAULT CHARSET=UTF8;

INSERT INTO ALUGUEL(id, status, valor, local_retirada, local_entrega, data_retirada, data_entrega, data_prevista_entrega, periodo, locador, locatario, veiculo, mensagem_comprometimento, assinatura_locador, mensagem_consentimento, assinatura_locatario) VALUES(1, "ATIVO", 300, 2, 1, '2023-09-04', '2023-09-07', '2023-09-07', 3, 2, 1, 2, 'Mensagem Comprometimento', '2023-09-04', 'Mensagem Consentimento', '2023-09-04');