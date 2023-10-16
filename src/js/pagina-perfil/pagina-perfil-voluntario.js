import { updateVoluntario } from "./connect-api.js";

$(document).ready(function () {
  var trigger = $(".hamburger"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $("#wrapper").toggleClass("toggled");
  });
});

const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);
//condição para redirecionamento a página de login caso não tenha usuário logado
if (!user) {
  window.location.href = "./login-cadastro.php";
}

const btnMostrarPerfil = document.querySelector("#btnMostrar-perfil-link");
const perfilContainer = document.querySelector("#registration-form-perfil");
console.log(perfilContainer);
const servicosContainer = document.querySelector("#mostrar-servico-card");
const btnServicos = document.querySelector("#btnMostrar-servicos-link");
const btnSair = document.querySelector("#btnSair-perfil-link");
console.log(btnSair);

btnMostrarPerfil.addEventListener("click", () => {
  perfilContainer.classList.remove("esconder");
  console.log(perfilContainer);
});

btnServicos.addEventListener("click", () => {
  console.log("Clicou");
  servicosContainer.classList.remove("esconder");

  perfilContainer.classList.add("esconder");
  console.log(perfilContainer);
  console.log(servicosContainer);
});

btnSair.addEventListener("click", () => {
  console.log("Clicou");
  localStorage.removeItem("user");
  window.location.href = "./login-cadastro.php";
});
