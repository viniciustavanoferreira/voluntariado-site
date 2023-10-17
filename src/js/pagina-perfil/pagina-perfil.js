import { updateIdoso } from "./connect-api.js";
console.log(updateIdoso);

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

// // constante que vai armazenar o usuário logado
// const user = JSON.parse(localStorage.getItem("user"));
// // comentar para teste
// console.log(user);
// //condição para redirecionamento a página de login caso não tenha usuário logado
// if (!user) {
//   window.location.href = "./login-cadastro.php";
// }

// criação de variáveis para armazenar no card dados de serviços do usuário
user.servicoResponseDTOList.forEach((servico) => {
  console.log(servico);
  const servicosContainer = document.querySelector(".main__servicos");
  servicosContainer.innerHTML = `
  <div class="main__servicos__card" id="make-service${servico.id}">
      <div class="card__text">
          <h4>${servico.destino}</h4>
          <p>${servico.tipoServico}</p>
      </div>

      <div class="card__button" id="btnFazerCard" style="justify-content: center;">
          <a href="#">Fazer</a>
      </div>

  </div>`;
});

// constants com os elementos do formulário paara aalteração
const form = document.getElementById("form-alt");
console.log(form);
const usernick = document.getElementById("usuario-perfil");
const username = document.getElementById("nome-perfil");
console.log(username);
const email = document.getElementById("email-perfil");
// const cep = document.getElementById("cep-perfil");
const endereco = document.getElementById("endereco-perfil");
const bairro = document.getElementById("bairro-perfil");
const cidade = document.getElementById("cidade-perfil");
const estado = document.getElementById("estado-perfil");
const complemento = document.getElementById("complemento-perfil");
const bloco = document.getElementById("bloco-perfil");
const numeroAp = document.getElementById("numero-perfil");
const telefone = document.getElementById("telefone-perfil");
const idade = document.getElementById("idade-perfil");
const assRequerida = document.getElementById("assRequerida-perfil");
const condicaoPerfil = document.getElementById("condicao-perfil");
const preferencia = document.getElementById("preferencia-perfil");

// associando os valores do usuário logado aos campos do formulário
usernick.value = user.usuarioResponseDTO.usuario;
username.value = user.usuarioResponseDTO.nome;
email.value = user.usuarioResponseDTO.email;
// cep.value = user.usuarioResponseDTO.cep;
endereco.value = user.usuarioResponseDTO.endereco;
bairro.value = user.usuarioResponseDTO.bairro;
cidade.value = user.usuarioResponseDTO.cidade;
estado.value = user.usuarioResponseDTO.estado;
complemento.value = user.usuarioResponseDTO.complemento;
numeroAp.value = user.usuarioResponseDTO.numeroAp;
bloco.value = user.usuarioResponseDTO.bloco;
telefone.value = user.usuarioResponseDTO.telefone;
// idade.value = user.idosoResponseDTO.dataNascimento;
assRequerida.value = user.idosoResponseDTO.assistenciaRequerida;
condicaoPerfil.value = user.idosoResponseDTO.condicaoSaude;

// constants que vão armazenar os elementos do html
const btnMostrarPerfil = document.querySelector("#btnMostrar-perfil-link");
const perfilContainer = document.querySelector("#registration-form-perfil-display");
const bemvindoContainer = document.querySelector("#content-bemvindo");
const btnServicos = document.querySelector("#btnMostrar-servicos-link");
const mainTitleCriar = document.querySelector("#criar-servico-title");
const mainTitleHistorico = document.querySelector("#historico-title");
const mainCriarServicoCard = document.querySelector("#make-service");
const mostrarServicoCard = document.querySelector("#mostrar-servico-card");
const btnEditarPerfil = document.querySelector("#btnEditar-perfil-link");
const btnEditarSenha = document.querySelector("#btnEditar-senha-link");
const editarSenhaContainer = document.querySelector("#form-senha-usuario");

const btnSair = document.querySelector("#btnSair-perfil-link");
console.log(btnSair);

// eventos de click
btnMostrarPerfil.addEventListener("click", () => {
perfilContainer.classList.remove('esconder');
bemvindoContainer.classList.add('esconder');

});

btnServicos.addEventListener("click", () => {
  mainTitleCriar.className = "main-title";
  mainTitleHistorico.className = "main-title";
  mainCriarServicoCard.className = "main__servicos__card";
  mostrarServicoCard.className += "main__servicos_card";
  perfilContainer.className += "esconder";
});

btnEditarPerfil.addEventListener("click", () => {
  // tem que criar
});

btnEditarSenha.addEventListener("click", () => {
  editarSenhaContainer.className += "card__form";
  mainTitleCriar.className = "esconder";
  mainTitleHistorico.className = "esconder";
  mainCriarServicoCard.className = "esconder";
  mostrarServicoCard.className = "esconder";
  perfilContainer.className = "esconder";
});

// evento para dar logout do usuário
btnSair.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "./login-cadastro.php";
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // constante que vai armazenar o valor do campo do formulário
  const cadastro = {
    idosoResponseDTO: {
      condicaoSaude: condicaoPerfil.value,
      assistenciaRequerida: assRequerida.value,
      preferenciaDia: preferencia.value,
    },
    usuarioResponseDTO: {
      nome: username.value,
      usuario: usernick.value,
      senha: user.usuarioResponseDTO.senha,
      email: email.value,
      cep: user.usuarioResponseDTO.cep,
      endereco: endereco.value,
      bairro: bairro.value,
      cidade: cidade.value,
      estado: estado.value,
      complemento: complemento.value,
      bloco: bloco.value,
      numeroAp: numeroAp.value,
      telefone: telefone.value,
      dataNascimento: user.usuarioResponseDTO.dataNascimento,
      perfil: user.usuarioResponseDTO.perfil,
      disponibilidade: user.usuarioResponseDTO.disponibilidade,
    },
  };
  console.log(cadastro);
  try {
    // constante que vai armazenar a resposta da requisição
    const resposta = await updateIdoso(cadastro);
    console.log(resposta);
    // redirecionamento para a página de perfil
    // window.location.href = "./pagina-perfil.php";
  } catch (error) {
    // mensagem de erro caso a requisição não seja feita
    alert(error.message);
  }
});
