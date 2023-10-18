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


// ATUALIZAÇÃO

// constants com os elementos do formulário para alteração
const form = document.getElementById("registration-form-perfil-atualizar");
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
const habilidade = document.getElementById("habilidade-perfil");
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
idade.value = user.usuarioResponseDTO.idade;
habilidade.value= user.usuarioResponseDTO.habilidade;
preferencia.value= user.usuarioResponseDTO.habilidade;
// idade.value = user.idosoResponseDTO.dataNascimento;



form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // constante que vai armazenar o valor do campo do formulário
  const cadastro = {
    voluntarioRespondeDTO:{preferencia: cadastro.voluntarioResponseDTO.preferencia,
      habilidade: cadastro.voluntarioResponseDTO.habilidade,
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
      idade: user.usuarioResponseDTO.idade
    },
  };
  console.log(cadastro);
  try {
    // constante que vai armazenar a resposta da requisição
    const resposta = await updateVoluntario(cadastro);
    console.log(resposta);
    // redirecionamento para a página de perfil
    window.location.href = "./pagina-perfil.php";
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
const perfilCardDisplay = document.querySelector("#registration-form-perfil-display");
const perfilCardAtualizar = document.querySelector("#registration-form-perfil-atualizar");
const mostrarServicoCard = document.querySelector("#servico-main-content");
const editarSenhaCard = document.querySelector("#form-senha-usuario");
// const editarUsuarioCard = document.querySelector("#form-usuario-editar");
const deletarUsuarioCard = document.querySelector("#exclusao-card");
const criarServicoCard = document.querySelector("#registration-form-servico");
// esse card só é usado para exibir para o respectivo usuário, as informações de seu serviço
const mostrarServicoAceitoCard = document.querySelector("#registration-form-servico");
const editarServiçoCard = document.querySelector("#registration-form-editar");


// eventos de click por método for each

const buttons = [
  // array que armazena um index de botões
  btnHome,
  btnMostrarPerfil,
  btnServicos,
  btnEditarPerfil,
  btnEditarSenha,
  btnDeletarPerfil,
  btnSairPerfil
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
  editarServiçoCard
];

buttons.forEach((button, index) => {
  // loop for each declarando o botão e o index especifico para aquele evento baseado nas arrays declaradas
  if (button) {
    // condicão para o eventov
    button.addEventListener('click', () => {
      try {
        esconderTodosConteudos();
        // chamo minha função que esconde os conteudos pelo metódo ClassList
        containers[index].classList.remove('esconder');
        // dentro do array container, remove esconder class do container trigerrizado pelo botão
      } catch (error) {
        window.alert(`Um erro: ${error.message}`);
        // caso, ocorro um erro
      }
    });
  }
});



btnSairPerfil.addEventListener("click", () => {
  console.log("Clicou");
  localStorage.removeItem("user");
  window.location.href = "./login-cadastro.php";
});

// funcao para esconder o contéúdo que nao corresponde ao click event(condição IF para manter somente add)

function esconderTodosConteudos() {
  if (bemvindoContainer){
    bemvindoContainer.classList.add('esconder');
  }
  if (perfilCardDisplay) {
      perfilCardDisplay.classList.add('esconder');
  }
  if (perfilCardAtualizar) {
      perfilCardAtualizar.classList.add('esconder');
  }
  if (mostrarServicoCard) {
      mostrarServicoCard.classList.add('esconder');
  }
  if (editarSenhaCard) {
      editarSenhaCard.classList.add('esconder');
  }
  // if (editarUsuarioCard) {
  //     editarUsuarioCard.classList.add('esconder');
  // }
  if (deletarUsuarioCard) {
      deletarUsuarioCard.classList.add('esconder');
  }
  if (criarServicoCard) {
      criarServicoCard.classList.add('esconder');
  }
  if (mostrarServicoAceitoCard) {
      mostrarServicoAceitoCard.classList.add('esconder');
  }
  if (editarServiçoCard) {
      editarServiçoCard.classList.add('esconder');
  }
};
