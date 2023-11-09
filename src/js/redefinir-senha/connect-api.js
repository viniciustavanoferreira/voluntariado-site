async function resetPassword(senha) {
  // tipo de requisição que vai ser feita
  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/alterar-senha/id-usuario/{id-usuario}/nova-senha/${senha}`,
    requestOptions
  );
  // verificar se a conexão foi feita com sucesso. Caso não seja, será retornado um erro
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente em instantes");
  }
  // constante que será armazenada o arquivo .json que vem da API como um objeto.
  const conexaoTexto = await conexao.json();
  console.log(conexaoTexto);
  // retorno da constante com o json transformado em objeto
  return conexaoTexto;
}

export { resetPassword };
