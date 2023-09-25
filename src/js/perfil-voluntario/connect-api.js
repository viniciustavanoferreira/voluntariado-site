// função assincrona para requisição GET de login para a API do nosso backend
async function getServices(email) {
  // tipo de requisição que vai ser feita 
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  // constante que vai guardar a resposta da requisição. O await é utilizado junto com o async, aonde só vai ser atribuido o valor quando tiver resposta da API
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/servico/voluntario/email/${email}`,
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

// function teste() {
//   console.log("teste");
// }

// exportando constante que terá as funções de conexão de serviços do Voluntário para uso do js que manipulará a pagina perfil-voluntario 
export const connectServicesV = {
  getServices,
  // teste,
};
