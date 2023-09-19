async function getServices(email) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const conexao = await fetch(
    `https://sistema-voluntariado-backend.onrender.com/v1/api/servico/voluntario/${email}`,
    requestOptions
  );
  if (!conexao.ok) {
    throw new Error("Não foi possível conexão. Tente novamente");
  }
  const conexaoTexto = await conexao.json();
  return conexaoTexto;
}

// function teste() {
//   console.log("teste");
// }

export const connectServicesV = {
  getServices,
  // teste,
};
