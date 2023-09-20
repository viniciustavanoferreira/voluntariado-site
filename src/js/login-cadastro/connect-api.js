// função assincrona para requisição POST de login para a API do nosso backend
async function login(email, password) {
  // tipo de requisição que vai ser feita
  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/login/email/${email}/password/${password}`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  // constante que será armazenada o arquivo .json que vem da API como um objeto.
  const conexaoTexto = await conexao.json();
  // retorno da constante com o json transformado em objeto
  return conexaoTexto;
}

// função assincrona para requisição POST  para a API do nosso backend
async function register(cadastro) {
  // tipo de requisição que vai ser feita, aonde terá o body com os campos do cadastro
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: cadastro.nome,
      dataNascimento: cadastro.dataNascimento,
      email: cadastro.email,
      telefone: cadastro.telefone,
      cep: cadastro.cep,
      endereco: cadastro.endereco,
      usuario: cadastro.usuario,
      senha: cadastro.senha,
      perfil: cadastro.perfil,
    }),
    redirect: "follow",
  };
  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/${cadastro.perfil}`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  // constante que será armazenada o arquivo .json que vem da API.
  const conexaoResposta = await conexao.json();
  // retorno da constante com o json transformado em objeto
  return conexaoResposta;
}

// exportando constante que terá as funções de login e register para uso do js que manipulará a pagina login-main 
export const connectionLoginRegister = {
  login,
  register,
};
