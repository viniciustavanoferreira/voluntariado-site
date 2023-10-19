import { updateIdoso } from "./connect-api.js";

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

// constante que vai armazenar o usuário logado
const user = JSON.parse(localStorage.getItem("user"));
// comentar para teste
console.log(user);
//condição para redirecionamento a página de login caso não tenha usuário logado
if (!user) {
  window.location.href = "./login-cadastro.php";
}

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

// ATUALIZAÇÃO

// constants com os elementos do formulário para alteração
const form = document.getElementById("registration-form-perfil-atualizar");
const usernick = document.getElementById("usuario-perfil");
const username = document.getElementById("nome-perfil");
const email = document.getElementById("email-perfil");
// const cep = document.getElementById("cep-perfil");
const endereco = document.getElementById("endereço-perfil");
const bairro = document.getElementById("bairro-perfil");
const cidade = document.getElementById("cidade-perfil");
const estado = document.getElementById("estado-perfil");
// const complemento = document.getElementById("complemento-perfil");
const bloco = document.getElementById("bloco-perfil");
const numeroAp = document.getElementById("numerocasa-perfil");
const telefone = document.getElementById("numero-perfil");
const idade = document.getElementById("idade-perfil");

console.log(telefone);

const usernickRead = document.getElementById("usuario-perfil-display");
const usernameRead = document.getElementById("nome-perfil-display");
console.log(usernameRead);
const emailRead = document.getElementById("email-perfil-display");
// const cepRead = document.getElementById("cep-perfil-display");
const enderecoRead = document.getElementById("endereço-perfil-display");
const bairroRead = document.getElementById("bairro-perfil-display");
const cidadeRead = document.getElementById("cidade-perfil-display");
const estadoRead = document.getElementById("estado-perfil-display");
// const complementoRead = document.getElementById("complemento-perfil-display");
const blocoRead = document.getElementById("bloco-perfil-display");
const numeroApRead = document.getElementById("numerocasa-perfil-display");
const telefoneRead = document.getElementById("numero-perfil-display");
// const idadeRead = document.getElementById("idade-perfil-display");

const nomeApresentacao = document.querySelector("[data-nameuser]");
console.log(nomeApresentacao.textContent);
nomeApresentacao.textContent = getFirstName(user.usuarioResponseDTO.nome);

// const assRequerida = document.getElementById("assRequerida-perfil");
// const condicaoPerfil = document.getElementById("condicao-perfil");
// const preferencia = document.getElementById("preferencia-perfil");

// associando os valores do usuário logado aos campos do formulário
function updateForms(user) {
  usernick.value = user.usuarioResponseDTO.usuario;
  username.value = user.usuarioResponseDTO.nome;
  email.value = user.usuarioResponseDTO.email;
  // cep.value = user.usuarioResponseDTO.cep;
  endereco.value = user.usuarioResponseDTO.endereco;
  // console.log(endereco);
  bairro.value = user.usuarioResponseDTO.bairro;
  cidade.value = user.usuarioResponseDTO.cidade;
  estado.value = user.usuarioResponseDTO.estado;
  // complemento.value = user.usuarioResponseDTO.complemento;
  numeroAp.value = user.usuarioResponseDTO.numeroAp;
  bloco.value = user.usuarioResponseDTO.bloco;
  telefone.value = user.usuarioResponseDTO.telefone;
  // idade.value = user.usuarioResponseDTO.idade;
  // assRequerida.value = user.idosoResponseDTO.assistenciaRequerida;
  // condicaoPerfil.value = user.idosoResponseDTO.condicaoSaude;

  usernickRead.value = user.usuarioResponseDTO.usuario;
  usernameRead.value = user.usuarioResponseDTO.nome;
  emailRead.value = user.usuarioResponseDTO.email;
  // cepRead.value = user.usuarioResponseDTO.cep;
  enderecoRead.value = user.usuarioResponseDTO.endereco;
  bairroRead.value = user.usuarioResponseDTO.bairro;
  cidadeRead.value = user.usuarioResponseDTO.cidade;
  estadoRead.value = user.usuarioResponseDTO.estado;
  // complementoRead.value = user.usuarioResponseDTO.complemento;
  numeroApRead.value = user.usuarioResponseDTO.numeroAp;
  blocoRead.value = user.usuarioResponseDTO.bloco;
  telefoneRead.value = user.usuarioResponseDTO.telefone;
  // idadeRead.value = user.usuarioResponseDTO.idade;
  // idadeRead.value = user.idosoResponseDTO.dataNascimento;
  // assRequeridaRead.value = user.idosoResponseDTO.assistenciaRequerida;
  // condicaoPerfilRead.value = user.idosoResponseDTO.condicaoSaude;
}
updateForms(user);
console.log(user);
// evento para a relação de atualização

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // constante que vai armazenar o valor do campo do formulário
  const cadastro = {
    idosoResponseDTO: {
      condicaoSaude: user.idosoResponseDTO.condicaoSaude,
      assistenciaRequerida: user.idosoResponseDTO.assistenciaRequerida,
      preferenciaDia: user.idosoResponseDTO.preferenciaDia,
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
      complemento: user.usuarioResponseDTO.complemento,
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
    user.usuarioResponseDTO = cadastro.usuarioResponseDTO;
    user.idosoResponseDTO = cadastro.idosoResponseDTO;
    localStorage.setItem("user", JSON.stringify(user));
    updateForms(user);
    alert(resposta.message);
    // redirecionamento para a página de perfil
    // window.location.href = "./pagina-perfil-idoso.php";
  } catch (error) {
    // mensagem de erro caso a requisição não seja feita
    alert(error.message);
  }
});

// Botões e seus respectivos eventos(função EsconderTodos(adicione aquilo que quer esconder ao click event de um)) / ESTÁ NA ORDEM DESCRENTE//

// Botões sidebar
const btnHome = document.querySelector("#btnHome-perfil-link");
const btnMostrarPerfil = document.querySelector("#btnMostrar-perfil-link");
const btnServicos = document.querySelector("#btnMostrar-servicos-link");
const btnEditarPerfil = document.querySelector("#btnEditar-perfil-link");
const btnEditarSenha = document.querySelector("#btnEditar-senha-link");
const btnDeletarPerfil = document.querySelector("#btnDeletar-perfil-link");
const btnSairPerfil = document.querySelector("#btnSair-perfil-link");

// Botões de card
const btnAceitaServ = document.querySelector("#btnAceitarServi");
const btnMostrarServ = document.querySelector("#btnMostrarServi");
const btnRejeitarServ = document.querySelector("#btnRejeitarServi");

//Containers que lidam conteúdo

const bemvindoContainer = document.querySelector("#content-bemvindo");
const perfilCardDisplay = document.querySelector(
  "#registration-form-perfil-display"
);
const perfilCardAtualizar = document.querySelector(
  "#registration-form-perfil-atualizar"
);
const mostrarServicoCard = document.querySelector("#servico-main-content");
const editarSenhaCard = document.querySelector("#form-senha-usuario");
// const editarUsuarioCard = document.querySelector("#form-usuario-editar");
const deletarUsuarioCard = document.querySelector("#exclusao-card");
const criarServicoCard = document.querySelector("#registration-form-servico");
// esse card só é usado para exibir para o respectivo usuário, as informações de seu serviço
const mostrarServicoAceitoCard = document.querySelector(
  "#registration-form-servico"
);
const editarServiçoCard = document.querySelector("#registration-form-editar");

// eventos de click

const buttons = [
  // array que armazena um index de botões
  btnHome,
  btnMostrarPerfil,
  btnServicos,
  btnEditarPerfil,
  btnEditarSenha,
  btnDeletarPerfil,
  btnSairPerfil,
];

const containers = [
  // array que armazena um index de containers HTML
  bemvindoContainer,
  perfilCardDisplay,
  mostrarServicoCard,
  perfilCardAtualizar,
  editarSenhaCard,
  // editarUsuarioCard,
  deletarUsuarioCard,
  criarServicoCard,
  mostrarServicoAceitoCard,
  editarServiçoCard,
];

buttons.forEach((button, index) => {
  // loop for each declarando o botão e o index especifico para aquele evento baseado nas arrays declaradas
  if (button) {
    // condicão para o eventov
    button.addEventListener("click", () => {
      try {
        esconderTodosConteudos();
        // chamo minha função que esconde os conteudos pelo metódo ClassList
        containers[index].classList.remove("esconder");
        // dentro do array container, remove esconder class do container trigerrizado pelo botão
      } catch (error) {
        window.alert(`Um erro: ${error.message}`);
        // caso, ocorro um erro
      }
    });
  }
});

// funcao para esconder o contéúdo que nao corresponde ao click event(condição IF para manter somente add)

function esconderTodosConteudos() {
  if (bemvindoContainer) {
    bemvindoContainer.classList.add("esconder");
  }
  if (perfilCardDisplay) {
    perfilCardDisplay.classList.add("esconder");
  }
  if (perfilCardAtualizar) {
    perfilCardAtualizar.classList.add("esconder");
  }
  if (mostrarServicoCard) {
    mostrarServicoCard.classList.add("esconder");
  }
  if (editarSenhaCard) {
    editarSenhaCard.classList.add("esconder");
  }
  // if (editarUsuarioCard) {
  //     editarUsuarioCard.classList.add('esconder');
  // }
  if (deletarUsuarioCard) {
    deletarUsuarioCard.classList.add("esconder");
  }
  if (criarServicoCard) {
    criarServicoCard.classList.add("esconder");
  }
  if (mostrarServicoAceitoCard) {
    mostrarServicoAceitoCard.classList.add("esconder");
  }
  if (editarServiçoCard) {
    editarServiçoCard.classList.add("esconder");
  }
}

function isLower(char) {
  return char >= "a" && char <= "z";
}

function isUpper(char) {
  return char >= "A" && char <= "Z";
}

function getFirstName(name) {
  let i = 0;
  while (isLower(name[i]) || isUpper(name[i])) i++;
  return name.substr(0, i);
}

// evento para dar logout do usuário
btnSairPerfil.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "./login-cadastro.php";
});
