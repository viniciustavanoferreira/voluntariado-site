import { connectionLoginRegister } from "./connect-api.js";
// import da constant connectionLoginRegister que terá as funções para conexão com a API

// atribuição dos elementos HTML em constantes para manipulação da página
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const emailElement = document.querySelector("[name=txEmail]");
const password = document.querySelector("[name=txPassword]");

// const body = document.querySelector("body");
// função que irá escutar o evento click do btnSignin
btnSignin.addEventListener("click", (event) => {
  // função que previne que a página atualize ao clicar
  event.preventDefault();
  // console.log("clicado");
  // body.className = "sign-in-js";
});
// função que irá escutar o evento click do btnSignUp
btnSignup.addEventListener("click", async (event) => {
  // função que previne que a página atualize ao clicar
  event.preventDefault();
  console.log("Clickou");
  // variavél que armazenará o objeto json
  let resposta;
  // teste para ver se está chegando os valores dos campos
  console.log(emailElement.value);
  console.log(password.value);

  // try catch para fazer requisição com login e senha e, caso feito com sucesso, será redirecionado para a página devida
  try {
    resposta = await connectionLoginRegister.login(
      "teste@gmail.com",
      "@ahuo123HakDk"
    );
    console.log(resposta);
    // condição para redirecionamento a página voluntario
    if (resposta.perfil === "VOLUNTARIO") {
      window.location.href = "../../php/pagina-perfil.php";
    }
    // condição para redirecionamento a página idoso
    if (resposta.perfil === "IDOSO") {
      window.location.href = "./servicos.php";
    }
  } catch (err) {
    //catch para caso de erro
    console.warn(err);
  }
  // body.className = "sign-up-js";
});
console.log("teste");

// Invoca Redefinir Senha.
document.addEventListener("DOMContentLoaded", function () {
  const forgotPasswordLink = document.getElementById("forgot-password-link");

  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "./redefinir-senha.php";
    });
  }
});

