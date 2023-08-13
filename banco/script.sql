-- Database: dbvoluntariodados

-- DROP DATABASE IF EXISTS dbvoluntariodados;

CREATE DATABASE dbvoluntariodados
    WITH
    OWNER = service
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF8'
    LC_CTYPE = 'en_US.UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

 CREATE TABLE usuario (
  idUsuario SERIAL PRIMARY KEY,
  nome_usuario VARCHAR(45),
  primeiro_nome VARCHAR(30),
  segundo_nome VARCHAR(30),
  can_change_password BOOLEAN,
  idSenha INT,
  email VARCHAR(50),
  endereco VARCHAR(100),
  telefone CHAR(11),
  nascimento DATE,
  bloco VARCHAR(2),
  numero_ap VARCHAR(3),
  visitante BOOLEAN,
  disponibilidade VARCHAR(20),
  idUsuarioIdoso INT
);

CREATE TABLE Idoso (
  idIdoso SERIAL PRIMARY KEY,
  condicao_saude VARCHAR(20),
  assistencia_requirida VARCHAR(15),
  idUsuarioIdoso INT
);

CREATE TABLE Voluntario (
  idVoluntario SERIAL PRIMARY KEY,
  preferencia VARCHAR(20),
  habilidade VARCHAR(20),
  idUsuarioVoluntario INT
);

CREATE TABLE senha (
  idsenha SERIAL PRIMARY KEY,
  usuario_id INT,
  senha_hash VARCHAR(100)
);

CREATE TABLE tipo (
  idTipo SERIAL PRIMARY KEY,
  nome VARCHAR(20)
);

CREATE TABLE servico (
  idServico SERIAL PRIMARY KEY,
  tipo_id INT,
  Ordem VARCHAR(30),
  Data_Inicio TIMESTAMP,
  Data_Fim TIMESTAMP,
  Destino VARCHAR(50),
  Status VARCHAR(20),
  idIdosoServ INT,
  idVoluntarioServ INT
);

CREATE TABLE todos_tem_tipo (
  idIdosoTipo INT,
  idVoluntarioTipo INT,
  idServicoTipo INT
);

-- Alter table usuario
ALTER TABLE usuario
  ADD CONSTRAINT fk_senha_usuario FOREIGN KEY (idSenha) REFERENCES senha(idsenha);

-- Alter table Idoso
ALTER TABLE Idoso
  ADD CONSTRAINT FK_Idoso_Usuario FOREIGN KEY (idUsuarioIdoso) REFERENCES usuario(idUsuario);

-- Alter table Voluntario
ALTER TABLE Voluntario
  ADD CONSTRAINT FK_Voluntario_Usuario FOREIGN KEY (idUsuarioVoluntario) REFERENCES usuario(idUsuario);

-- Alter table senha
ALTER TABLE senha
  ADD CONSTRAINT fk_senha FOREIGN KEY (usuario_id) REFERENCES usuario(idUsuario);

-- Alter table servico
ALTER TABLE servico
  ADD CONSTRAINT fk_tipo_id FOREIGN KEY (tipo_id) REFERENCES tipo(idTipo),
  ADD CONSTRAINT fk_id_Idoso_Serv FOREIGN KEY (idIdosoServ) REFERENCES Idoso(idIdoso),
  ADD CONSTRAINT fk_id_Voluntario_Serv FOREIGN KEY (idVoluntarioServ) REFERENCES Voluntario(idVoluntario);

-- Alter table todos_tem_tipo
ALTER TABLE todos_tem_tipo
  ADD CONSTRAINT ttt_idoso FOREIGN KEY (idIdosoTipo) REFERENCES Idoso(idIdoso),
  ADD CONSTRAINT fk_id_Idoso_Tipo FOREIGN KEY (idVoluntarioTipo) REFERENCES Voluntario(idVoluntario),
  ADD CONSTRAINT fk_id_Voluntario_Tipo FOREIGN KEY (idServicoTipo) REFERENCES servico(idServico);


INSERT INTO usuario (nome_usuario, primeiro_nome, segundo_nome, can_change_password, email, endereco, telefone, nascimento, bloco, numero_ap, visitante)
VALUES
  ('usuario1', 'Primeiro', 'Usuário', true, 'usuario1@example.com', 'Endereço 1', '1234567890', '2000-01-01', 'A', '101', false),
  ('usuario2', 'Segundo', 'Usuário', false, 'usuario2@example.com', 'Endereço 2', '0987654321', '1995-05-05', 'B', '202', false),
  ('usuario3', 'Terceiro', 'Usuário', true, 'usuario3@example.com', 'Endereço 3', '9876543210', '1980-10-15', 'C', '303', true),
  ('usuario4', 'Quarto', 'Usuário', false, 'usuario4@example.com', 'Endereço 4', '0123456789', '1992-12-31', 'D', '404', false);