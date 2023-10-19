// função assincrona para requisição POST  para a API do nosso backend
// >>>>> Utilizar para página perfil-voluntario e perfil-idoso <<<<<
async function updateIdoso(cadastro) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  console.log(cadastro);

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      condicaoSaude: cadastro.idosoResponseDTO.condicaoSaude,
      assistenciaRequerida: cadastro.idosoResponseDTO.assistenciaRequerida,
      preferenciaDia: cadastro.idosoResponseDTO.preferenciaDia,
      usuarioRequestDTO: {
        nome: cadastro.usuarioResponseDTO.nome,
        usuario: cadastro.usuarioResponseDTO.usuario,
        senha: cadastro.usuarioResponseDTO.senha,
        email: cadastro.usuarioResponseDTO.email,
        cep: cadastro.usuarioResponseDTO.cep,
        endereco: cadastro.usuarioResponseDTO.endereco,
        bairro: cadastro.usuarioResponseDTO.bairro,
        cidade: cadastro.usuarioResponseDTO.cidade,
        estado: cadastro.usuarioResponseDTO.estado,
        complemento: cadastro.usuarioResponseDTO.complemento,
        bloco: cadastro.usuarioResponseDTO.bloco,
        numeroAp: cadastro.usuarioResponseDTO.numeroAp,
        telefone: cadastro.usuarioResponseDTO.telefone,
        dataNascimento: cadastro.usuarioResponseDTO.dataNascimento,
        perfil: cadastro.usuarioResponseDTO.perfil,
        disponibilidade: cadastro.usuarioResponseDTO.disponibilidade,
      },
    }),
    redirect: "follow",
  };
  // console.log(requestOptions.body);
  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/idoso`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  // constante que será armazenada o arquivo .json que vem da API.
  const conexaoResposta = await conexao.json();
  console.log(conexaoResposta.message);
  // retorno da constante com o json transformado em objeto
  return conexaoResposta;
}
async function updateVoluntario(cadastro) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  // console.log(cadastro);

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      preferencia: cadastro.voluntarioResponseDTO.preferencia,
      habilidade: cadastro.voluntarioResponseDTO.habilidade,
      usuarioRequestDTO: {
        nome: cadastro.usuarioResponseDTO.nome,
        usuario: cadastro.usuarioResponseDTO.usuario,
        senha: cadastro.usuarioResponseDTO.senha,
        email: cadastro.usuarioResponseDTO.email,
        cep: cadastro.usuarioResponseDTO.cep,
        endereco: cadastro.usuarioResponseDTO.endereco,
        bairro: cadastro.usuarioResponseDTO.bairro,
        cidade: cadastro.usuarioResponseDTO.cidade,
        estado: cadastro.usuarioResponseDTO.estado,
        complemento: cadastro.usuarioResponseDTO.complemento,
        bloco: cadastro.usuarioResponseDTO.bloco,
        numeroAp: cadastro.usuarioResponseDTO.numeroAp,
        telefone: cadastro.usuarioResponseDTO.telefone,
        dataNascimento: cadastro.usuarioResponseDTO.dataNascimento,
        perfil: cadastro.usuarioResponseDTO.perfil,
        disponibilidade: cadastro.usuarioResponseDTO.disponibilidade,
      },
    }),
    redirect: "follow",
  };

  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/voluntario`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  // constante que será armazenada o arquivo .json que vem da API.
  const conexaoResposta = await conexao.text();
  console.log(conexaoResposta);
  // retorno da constante com o json transformado em objeto
  return conexaoResposta;
}

async function getCEP(cep) {
  const conexao = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  const dadosCEP = await conexao.json();
  return dadosCEP;
}

async function createService(servico) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  // console.log(cadastro);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify([
      {
        id: servico.id,
        dataHoraFim: servico.dataHoraFim,
        dataHoraInicio: servico.dataHoraInicio,
        ordem: servico.ordem,
        destino: servico.destino,
        tipoServico: servico.tipoServico,
        status: servico.status,
      },
    ]),
    redirect: "follow",
  };

  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/servico`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  // constante que será armazenada o arquivo .json que vem da API.
  const conexaoResposta = await conexao.json();
  console.log(conexaoResposta);
  // retorno da constante com o json transformado em objeto
  return conexaoResposta;
}
async function updateService(servico) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  // console.log(cadastro);

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify([
      {
        codigoServico: servico.id,
        tipoServico: servico.tipoServico,
        dataFim: servico.dataHoraFim,
        dataInicio: servico.dataHoraInicio,
        ordem: servico.ordem,
        destino: servico.destino,
        tipoServico: servico.tipoServico,
        status: servico.status,
        idUsuarioVoluntario: servico.idUsuarioVoluntario,
      },
    ]),
    redirect: "follow",
  };

  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/servico`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  // constante que será armazenada o arquivo .json que vem da API.
  const conexaoResposta = await conexao.json();
  console.log(conexaoResposta);
  // retorno da constante com o json transformado em objeto
  return conexaoResposta;
}
async function deleteService(servico) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  // console.log(cadastro);

  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/servico/codigo-servico/${servico.id}`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  // constante que será armazenada o arquivo .json que vem da API.
  const conexaoResposta = await conexao.json();
  console.log(conexaoResposta);
  // retorno da constante com o json transformado em objeto
  return conexaoResposta;
}

// exportando constante que terá as funções de login e register para uso do js que manipulará a pagina login-main
export {
  updateIdoso,
  updateVoluntario,
  createService,
  updateService,
  deleteService,
};
