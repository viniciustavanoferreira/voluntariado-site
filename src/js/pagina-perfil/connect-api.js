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
        // telefone: cadastro.usuarioResponseDTO.telefone,
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
    body: JSON.stringify({
      tipoServico: servico.tipoServico,
      dataInicio: servico.dataInicio,
      dataFim: servico.dataFim,
      ordem: servico.ordem,
      destino: servico.destino,
      status: servico.status,
      idUsuarioIdoso: `${servico.usuario}`,
    }),
    redirect: "follow",
  };

  console.log(requestOptions);
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
  // console.log(servico);

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(
      {
        codigoServico: servico.codigoServico,
        tipoServico: servico.tipoServico,
        dataInicio: servico.dataHoraInicio,
        dataFim: servico.dataHoraFim,
        ordem: servico.ordem,
        destino: servico.destino,
        status: servico.status,
        idUsuarioVoluntario: servico.idUsuarioVoluntario,
      }),
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
async function deleteService(id) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  // console.log(cadastro);

  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/servico/codigo-servico/${id}`,
    requestOptions
  );
  console.log(id);
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

// fazendo busca de usuario

async function buscarUsuario(username) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const resposta = await fetch(
      `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario?usuario=${username}`,
      requestOptions
    );

    if (!resposta.ok) {
      throw new Error(
        "Erro ao encontrar este usuário, por favor tente novamente dentro de alguns minutos"
      );
    }

    const userData = await resposta.json();
    return userData;
  } catch (error) {
    throw error;
  }
}

async function buscarServicoNaoAceito() {
  try {
    const todosOsServicos = await fetch(`https://sistema-voluntariado-backend.onrender.com/v1/api/servico`);
    if (!todosOsServicos.ok) {
      throw new Error("Não foi possível obter os serviços.");
    }
    const servicos = await todosOsServicos.json();

    // debugger;

    // console.log("Inside buscarServicoNaoAceito:", servicos);


    return servicos;
  } catch (error) {
    throw new Error(`Erro na busca de serviços não aceitos: ${error.message}`);
  }
}
async function servicoAceitoVolutario(requestBody) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  // console.log(cadastro);

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(requestBody),
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

async function deletarUsuario(codigoUsuario) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  // console.log(cadastro);

  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/codigo-usuario/${codigoUsuario}`,
    requestOptions
  );

  console.log(codigoUsuario);
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
  buscarUsuario,
  buscarServicoNaoAceito,
  servicoAceitoVolutario,
  deletarUsuario,
};
