CREATE TABLE PERMISSAO (
	id BIGINT(20) PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE USUARIO_PERMISSAO (
	id_usuario BIGINT(20) NOT NULL,
	id_permissao BIGINT(20) NOT NULL,
	PRIMARY KEY (id_usuario, id_permissao),
	FOREIGN KEY (id_usuario) REFERENCES USUARIO(id),
	FOREIGN KEY (id_permissao) REFERENCES PERMISSAO(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO PERMISSAO (id, descricao) values (1, 'ROLE_REGISTER_USER');
INSERT INTO PERMISSAO (id, descricao) values (2, 'ROLE_REMOVE_USER');
INSERT INTO PERMISSAO (id, descricao) values (3, 'ROLE_SEARCH_USER');
INSERT INTO PERMISSAO (id, descricao) values (4, 'ROLE_REGISTER_CAR');
INSERT INTO PERMISSAO (id, descricao) values (5, 'ROLE_REMOVE_CAR');
INSERT INTO PERMISSAO (id, descricao) values (6, 'ROLE_SEARCH_CAR');
INSERT INTO PERMISSAO (id, descricao) values (7, 'ROLE_REGISTER_RENTAL');
INSERT INTO PERMISSAO (id, descricao) values (8, 'ROLE_REMOVE_RENTAL');
INSERT INTO PERMISSAO (id, descricao) values (9, 'ROLE_SEARCH_RENTAL');

INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 1);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 2);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 3);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 4);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 5);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 6);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 7);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 8);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (1, 9);

INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 1);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 2);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 3);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 4);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 5);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 6);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 7);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 8);
INSERT INTO USUARIO_PERMISSAO (id_usuario, id_permissao) values (2, 9);