import { login } from "./connect-api.js";
// import da constant connectionLoginRegister que terá as funções para conexão com a API

// atribuição dos elementos HTML em constantes para manipulação da página
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const emailElement = document.querySelector("[name=txEmail]");
const password = document.querySelector("[name=txPassword]");

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  const perfil = user.usuarioResponseDTO.perfil;
  window.location.href = `./pagina-perfil-${perfil.toLowerCase()}.php`;
}

// função que irá escutar o evento click do btnSignin
btnSignin.addEventListener("click", (event) => {
  // função que previne que a página atualize ao clicar
  event.preventDefault();
  window.location.href = "./cadastro.php";
});
// função que irá escutar o evento click do btnSignUp
btnSignup.addEventListener("click", async (event) => {
  // função que previne que a página atualize ao clicar
  event.preventDefault();
  // teste para ver se está chegando os valores dos campos
  // console.log(emailElement.value);
  // console.log(password.value);

  // try catch para fazer requisição com login e senha e, caso feito com sucesso, será redirecionado para a página devida
  try {
    const resposta = await login(emailElement.value, password.value);
    let text = JSON.stringify(resposta);
    console.log(text);
    localStorage.setItem("user", text);
    // condição para redirecionamento a página voluntario
    if (resposta.usuarioResponseDTO.perfil === "VOLUNTARIO") {
      window.location.href = "./pagina-perfil-voluntario.php";
    }
    // condição para redirecionamento a página idoso
    if (resposta.usuarioResponseDTO.perfil === "IDOSO") {
      window.location.href = "./pagina-perfil-idoso.php";
    }
  } catch (err) {
    //catch para caso de erro na requisição
    alert("Usuário ou senha incorretos");
  }
  // body.className = "sign-up-js";
});

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
