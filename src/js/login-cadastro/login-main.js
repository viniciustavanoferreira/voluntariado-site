import { connection } from "./connect-api.js";

const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const emailElement = document.querySelector("[name=txEmail]");
const password = document.querySelector("[name=txPassword]");

// const body = document.querySelector("body");

btnSignin.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log("clicado");
  // body.className = "sign-in-js";
});

btnSignup.addEventListener("click", async (event) => {
  event.preventDefault();
  let resposta;
  // teste para ver se está chegando os valores dos campos
  // console.log(emailElement.value);
  // console.log(password.value);
  try {
    resposta = await connection.login("teste@gmail.com", "@ahuo123HakDk");
    // console.log(resposta);
    if (resposta.perfil === "VOLUNTARIO")
      console.log("Mover para page de Voluntario");
    if (resposta.perfil === "IDOSO") console.log("Mover para page de Idoso");
  } catch (err) {
    console.warn(err);
  }
  // body.className = "sign-up-js";
});
