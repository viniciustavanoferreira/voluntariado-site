// função assincrona para requisição POST de login para a API do nosso backend
async function login(email, password) {
  // tipo de requisição que vai ser feita
  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/login/id-usuario/${email}/senha/${password}`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente em instantes");
  }
  // constante que será armazenada o arquivo .json que vem da API como um objeto.
  const conexaoTexto = await conexao.json();
  // console.log(conexaoTexto.usuarioResponseDTO);
  // retorno da constante com o json transformado em objeto
  return conexaoTexto;
}

// função assincrona para requisição POST  para a API do nosso backend
async function register(cadastro) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  // console.log(cadastro);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: cadastro.nome,
      usuario: cadastro.usuario,
      senha: cadastro.senha,
      email: cadastro.email,
      cep: cadastro.cep,
      endereco: cadastro.endereco,
      bairro: cadastro.bairro,
      cidade: cadastro.cidade,
      estado: cadastro.estado,
      complemento: cadastro.complemento,
      bloco: cadastro.bloco,
      numeroAp: cadastro.numeroAp,
      telefone: cadastro.telefone,
      dataNascimento: cadastro.dataNascimento,
      perfil: cadastro.perfil,
      disponibilidade: cadastro.disponibilidade,
    }),
    redirect: "follow",
  };
  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  // console.log(conexao)
  // constante que será armazenada o arquivo .json que vem da API.
  const conexaoResposta = await conexao.json();
  // console.log(conexaoResposta);
  if (!conexao.ok) {
    throw new Error(conexaoResposta.exception);
  }
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

// exportando constante que terá as funções de login e register para uso do js que manipulará a pagina login-main
export { login, register, getCEP };
