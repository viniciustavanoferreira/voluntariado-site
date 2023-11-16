import {
  updateIdoso,
  createService,
  updateService,
  deleteService,
  buscarUsuario,
  deletarUsuario,
} from "./connect-api.js";
import { resetPassword } from "../redefinir-senha/connect-api.js";

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
const servicosContainer = document.querySelector("[data-historico]");
function putServicos() {
  servicosContainer.innerHTML = "";
  user.servicoResponseDTOList?.forEach((servico) => {
    console.log(servico);
    console.log("CHEGOU");
    // servicosContainer.innerHTML = "";
    if (servico.idUsuarioVoluntario)
    {
      servicosContainer.innerHTML += `
        <div class="main__servicos__card " id="${servico.id}">
        <div class="card__text">
          <h4>${servico.destino}</h4>
          <h4>${servico.idUsuarioIdoso}</h4>
          <p>Tipo de Serviço: ${servico.tipoServico}</p>
          <p>Data de Início: ${formatarData(servico.dataHoraInicio)}</p>
          <p>Destino: ${servico.destino}</p>
          <p>Voluntario: ${servico.idUsuarioVoluntario}</p>
          <p>Status: ${servico.status}</p>
        </div>
        <div id='${servico.id}' class="card__button-group">
            <div class="card__button" id="btnMostrarServ">
                <a data-alterar href="#">Editar</a>
            </div>
            <div class="card__button" id="btnEXcluirServ">
                <a data-deletar href="#">Rejeitar</a>
            </div>
        </div>
    </div>

    `;
    }
    else
    {
      servicosContainer.innerHTML += `
      <div class="main__servicos__card " id="${servico.id}">
          <div class="card__text">
            <h4>${servico.destino}</h4>
            <h4>${servico.idUsuarioIdoso}</h4>
            <p>Tipo de Serviço: ${servico.tipoServico}</p>
            <p>Data de Início: ${formatarData(servico.dataHoraInicio)}</p>
            <p>Destino: ${servico.destino}</p>
            <p>Status: ${servico.status}</p>
          </div>
          <div id='${servico.id}' class="card__button-group">
              <div class="card__button" id="btnMostrarServ">
                  <a data-alterar href="#">Editar</a>
              </div>
              <div class="card__button" id="btnEXcluirServ">
                  <a data-deletar href="#">Rejeitar</a>
              </div>
          </div>
      </div>

      `;

    }
  });
}
function putEventosServicos() {
  const alterarServicos = document.querySelectorAll("[data-alterar]");
  const deletarServicos = document.querySelectorAll("[data-deletar]");
  console.log(alterarServicos);
  console.log(deletarServicos);

  alterarServicos.forEach((servico) => {
    const idServico = Number(servico.parentElement.parentElement.id);
    console.log(servico.parentElement.parentElement.id);
    const servicoSelecionado = user.servicoResponseDTOList.find(
      (s) => s.id === idServico
    );

    servico.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("click alterar");
      console.log(servicoSelecionado);
    });
  });

  deletarServicos.forEach((servico) => {
    const idServico = Number(servico.parentElement.parentElement.id);
    // console.log(servico.parentElement.parentElement.id);
    servico.addEventListener("click", async (event) => {
      event.preventDefault();
      console.log("click deletar");
      console.log(idServico);
      try {
        const deletar = await deleteService(idServico);
        alert("Serviço deletado com sucesso");
        user.servicoResponseDTOList = user.servicoResponseDTOList.filter(
          (s) => s.id !== idServico
        );
        putServicos();
        putEventosServicos();
      } catch (error) {
        alert(error.message);
      }
    });
  });
}
putServicos();
putEventosServicos();

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
const idadeRead = document.getElementById("idade-perfil-display");

const nomeApresentacao = document.querySelector("[data-nameuser]");
console.log(nomeApresentacao.textContent);
nomeApresentacao.textContent = getFirstName(user.usuarioResponseDTO.nome);

const btnSalvarSenha = document.querySelector("#btnSalvarSenha");
const senhaAtual = document.querySelector("#antigo-senha");
const novaSenha = document.querySelector("#nova-senha");

// convenção de alteração de senha
btnSalvarSenha.addEventListener("click", async (event) => {
  event.preventDefault();
  const password = senhaAtual.value;
  const newPassword = novaSenha.value;
  console.log(password);
  console.log(newPassword);

  if (password !== user.usuarioResponseDTO.senha) {
    alert("As senhas não coincidem");
    return;
  }
  if (newPassword === user.usuarioResponseDTO.senha) {
    alert("A senha nova deve ser diferente da senha antiga");
    return;
  }
  if (newPassword === "") {
    alert("A senha nova não pode ser vazia");
    return;
  }
  try{
    const response = await resetPassword(user.usuarioResponseDTO.usuario, newPassword);
    console.log(response);
    user.usuarioResponseDTO.senha = newPassword;
    localStorage.setItem("user", JSON.stringify(user));
    alert(response.message);
  }
  catch(error){
    alert(error.message);
  }
});

// função que calcula idade
function calcularIdadePorISOString(dataNascimentoISO) {
  const hoje = new Date();
  const dataNasc = new Date(dataNascimentoISO);

  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNasc = dataNasc.getMonth();

  // Verificar se já fez aniversário neste ano
  if (
    mesAtual < mesNasc ||
    (mesAtual === mesNasc && hoje.getDate() < dataNasc.getDate())
  ) {
    idade--;
  }

  return idade;
}
// const assRequerida = document.getElementById("assRequerida-perfil");
// const condicaoPerfil = document.getElementById("condicao-perfil");
// const preferencia = document.getElementById("preferencia-perfil");

const formServico = document.getElementById("registration-form-servico");
const buttonMostrarServico = document.querySelector("#button-mostrar-criar");

buttonMostrarServico.addEventListener("click", () => {
  esconderTodosConteudos();
  formServico.classList.remove("esconder");
});

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
  idade.value = `${calcularIdadePorISOString(
    user.usuarioResponseDTO.dataNascimento
  )} anos`
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
  idadeRead.value = `${calcularIdadePorISOString(
    user.usuarioResponseDTO.dataNascimento
  )} anos`
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

bemvindoContainer.classList.remove('esconder');

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

// buscar usuário

const btnBuscarUsuario = document.getElementById("btnBuscar-usuario");
const searchInput = document.getElementById("search-input");
const userListContainer = document.getElementById("user-list-container");

// evento ao clickar
btnBuscarUsuario.addEventListener("click", async () => {
  const searchTerm = searchInput.value.toLowerCase();
  try {
    const userData = await buscarUsuario(searchTerm);

    // Limpa os resultados anteriores
    userListContainer.innerHTML = "";

    // match em input e usuario correspondido

    const usuarioCorrespondente = userData.find(
      (usuario) => usuario.usuario === searchTerm
    );

    //display para exibição do usuario correspondente
    if (usuarioCorrespondente) {
      const elementoUsuario = document.createElement("div");
      elementoUsuario.className = "item-usuario";
      elementoUsuario.innerHTML = `
        <img src="${usuarioCorrespondente.imagemPerfil}" alt="${usuarioCorrespondente.nome}">
        <h3>${usuarioCorrespondente.nome}</h3>
        <p>Email: ${usuarioCorrespondente.email}</p>

      `;
      userListContainer.appendChild(elementoUsuario);
    } else {
      userListContainer.innerHTML = "Nenhum usuário correspondente encontrado.";
    }
  } catch (error) {
    console.error(error.message);
  }
});

//exibição dos matchs de input e usuário

searchInput.addEventListener("input", async (event) => {
  try {
    // conexao e declaração para lowercase
    const buscarInput = searchInput.value.toLowerCase();
    const userData = await buscarUsuario(buscarInput);

    // Realize a busca com base no valor do campo de pesquisa
    const filtroUsuario = userData.filter((usuario) =>
      usuario.usuario.toLowerCase().includes(buscarInput)
    );

    userListContainer.innerHTML = "";

    // se 0, zero
    if (filtroUsuario.length === 0) {
      userListContainer.innerHTML = "Nenhum usuário encontrado";
    } else {
      // se existir, loop para pegar os elementos para cada usuario correspodente
      filtroUsuario.forEach((usuario) => {
        const elementoUsuario = document.createElement("div");
        elementoUsuario.className = "item-usuario";
        elementoUsuario.innerHTML = `
          <img src="${usuario.imagemPerfil}" alt="${usuario.nome}">
          <h3>${usuario.nome}</h3>


        `;

        userListContainer.appendChild(elementoUsuario);
      });
    }
  } catch (error) {
    console.error(error.message);
  }
});

// Event listener para lidar com o clique em um usuário

userListContainer.addEventListener("click", async (event) => {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("item-usuario")) {
    const userName = clickedElement.getAttribute("data-usuario");

    try {
      const userData = await buscarUsuario(userName);

      console.log(userData);

      // Preencha os campos do formulário com os dados do usuário
      document.getElementById("usuario-perfil-display").value =
        userData.usuario;
      document.getElementById("nome-perfil-display").value = userData.nome;
      document.getElementById("email-perfil-display").value = userData.email;
      document.getElementById("numero-perfil-display").value =
        userData.telefone;
      document.getElementById("endereço-perfil-display").value =
        userData.endereco;
      document.getElementById("bloco-perfil-display").value = userData.bloco;
      document.getElementById("numerocasa-perfil-display").value =
        userData.numeroCasa;
      document.getElementById("bairro-perfil-display").value = userData.bairro;
      document.getElementById("cidade-perfil-display").value = userData.cidade;
      document.getElementById("estado-perfil-display").value = userData.estado;

      // Tornar o formulário visível (removendo a classe 'esconder')
      const perfilForm = document.getElementById(
        "registration-form-perfil-display"
      );
      perfilForm.classList.remove("esconder");
    } catch (error) {
      console.error(error.message);
    }
  }
});
// evento historico display

// evento excluir conta

const ExcluirContaTrigger = document.getElementById("btnExcluirContaSim");

ExcluirContaTrigger.addEventListener("click", async () => {
  try {

    const codigoUsuario = user.usuarioResponseDTO.id;

    console.log(codigoUsuario)

    const confirmacao = confirm("Tem certeza de que deseja excluir o usuário?");

    if (confirmacao) {
      const resposta = await deletarUsuario(codigoUsuario);

      if (resposta) {
        alert("Usuário excluído com sucesso");
        window.location.href = "./cadastro2.php";
      } else {
        alert("Falha ao excluir o usuário");
      }
    }
  } catch (error) {
    console.error(error.message);
  }
});

// evento historico voluntario

// formantando data
function formatarData(data) {
  const dataFormatada = new Date(data);
  return dataFormatada.toLocaleString(); //
}



const historicoCardContainer = document.querySelector("[data-historico]");

if (user && user.servicoResponseDTOList && user.servicoResponseDTOList.length > 0) {
  user.servicoResponseDTOList.forEach((servico) => {
    if (servico.idUsuarioVoluntario){
    const servicoCard = document.createElement("div");
    servicoCard.className = "main__servicos__card";

    const cardText = document.createElement("div");
    cardText.className = "card__text";
    cardText.innerHTML = `
      <h4>${servico.idUsuarioIdoso}</h4>
      <p>Tipo de Serviço: ${servico.tipoServico}</p>
      <p>Data de Início: ${formatarData(servico.dataHoraInicio)}</p>
      <p>Destino: ${servico.destino}</p>
      <p>Voluntario: ${servico.idUsuarioVoluntario}</p>
      <p>Status: ${servico.status}</p>
    `;
    const cardButtonGroup = document.createElement("div");
    cardButtonGroup.className = "card__button-group";

    const btnAceitarServi = document.createElement("div");
    btnAceitarServi.className = "card__button";
    btnAceitarServi.id = "btnConcluirServ"; //
    btnAceitarServi.innerHTML = `<a href="#">Concluir</a>`;

    const btnMostrarServ = document.createElement("div");
    btnMostrarServ.className = "card__button";
    btnMostrarServ.id = "btnMostrarServ"; //
    btnMostrarServ.innerHTML = `<a href="#">Mostrar</a>`;

    const btnRejeitarServ = document.createElement("div");
    btnRejeitarServ.className = "card__button";
    btnRejeitarServ.id = "btnRejeitarServ"; //
    btnRejeitarServ.innerHTML = `<a href="#">Excluir</a>`;

    servicoCard.appendChild(cardText);

    cardButtonGroup.appendChild(btnAceitarServi);
    cardButtonGroup.appendChild(btnMostrarServ);
    cardButtonGroup.appendChild(btnRejeitarServ);


    servicoCard.appendChild(cardButtonGroup);



    historicoCardContainer.appendChild(servicoCard);
}});
} else {
  // Se não houver serviços
  historicoCardContainer.innerHTML = "Nenhum serviço encontrado para este usuário.";
}

// const btnBuscarUsuario = document.getElementById("btnBuscar-usuario");
// const placeholderInput = document.getElementById("search-input");
// const userListContainer = document.getElementById("user-list-container");

// btnBuscarUsuario.addEventListener("click", async () => {
//   const username = placeholderInput.value;

//   try {
//     const userData = await buscarUsuario(username);

//     // Limpa os resultados anteriores
//     userListContainer.innerHTML = "";

//     if (userData.length === 0) {
//         userListContainer.innerHTML = "Nenhum usuário encontrado.";
//     } else {
//         userData.forEach((usuario) => {
//             const elementoUsuario = document.createElement("div");
//             elementoUsuario.className = "item-usuario";
//             elementoUsuario.innerHTML = `
//                 <img src="${usuario.imagemPerfil}" alt="${usuario.nome}">
//                 <h3>${usuario.nome}</h3>
//                 <p>Email: ${usuario.email}</p>
//                 <!-- Adicione mais dados do usuário aqui, conforme necessário -->
//             `;

//             userListContainer.appendChild(elementoUsuario);
//         });
//     }
// } catch (error) {
//     console.error(error.message);
// }
//   try {
//     const userData = await buscarUsuario(username);

//     console.log(userData);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// display do nome do usuário no bemvindoContainer

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

const servicoDestino = document.getElementById("destino-form");
const ordemDescricao = document.getElementById("ordem-descricao-form");
const servicoTipo = document.getElementById("serviceSelect-form");
const buttonCriarServico = document.querySelector("[data-button-servico]");
console.log(servicoDestino);
console.log(ordemDescricao);
console.log(servicoTipo);
console.log(buttonCriarServico);

buttonCriarServico.addEventListener("click", async (event) => {
  event.preventDefault();

  const servico = {
    tipoServico: servicoTipo.value,
    dataInicio: new Date().toISOString(),
    dataFim: new Date().toISOString(),
    ordem: ordemDescricao.value,
    destino: servicoDestino.value,
    status: "PENDENTE",
    usuario: user.usuarioResponseDTO.usuario,
  };
  console.log(servico);
  try {
    const resposta = await createService(servico);
    console.log(resposta);
    user.servicoResponseDTOList
      ? user.servicoResponseDTOList.push(resposta)
      : (user.servicoResponseDTOList = [resposta]);
    console.log(user.servicoResponseDTOList);
    localStorage.setItem("user", JSON.stringify(user));
    alert("Serviço criado com sucesso");
    window.location.href = "./pagina-perfil-idoso.php";
  } catch (error) {
    alert(error.message);
  }
});
