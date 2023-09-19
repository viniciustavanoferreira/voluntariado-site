async function login(email, password) {
  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/login/email/${email}/password/${password}`,
    requestOptions
  );
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }

  const conexaoTexto = await conexao.json();
  return conexaoTexto;
  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.log("error", error));
}

async function register(cadastro) {
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
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/${cadastro.perfil}`,
    requestOptions
  );
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }

  const conexaoResposta = await conexao.json();
  return conexaoResposta;
}

export const connectionLoginRegister = {
  login,
  register,
};
