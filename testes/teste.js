$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });

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
const editarUsuarioCard = document.querySelector("#form-usuario-editar");
const deletarUsuarioCard = document.querySelector("#exclusao-card");
const criarServicoCard = document.querySelector("#registration-form-servico");
// esse card só é usado para exibir para o respectivo usuário, as informações de seu serviço
const mostrarServicoAceitoCard = document.querySelector("#registration-form-servico");
const editarServiçoCard = document.querySelector("#registration-form-editar");

// const btnSair = document.querySelector("#btnSair-perfil-link");
// console.log(btnSair);

console.log(btnMostrarPerfil);
// eventos de click

btnHome.addEventListener("click", () =>{
  esconderTodosConteudos();
  bemvindoContainer.classList.remove('esconder')
});

btnMostrarPerfil.addEventListener("click", () => {
  esconderTodosConteudos();
perfilCardDisplay.classList.remove('esconder');


});

btnServicos.addEventListener("click",() =>{
  esconderTodosConteudos();
  mostrarServicoCard.classList.remove('esconder');
  
  
});

btnEditarPerfil.addEventListener("click",() =>{
  esconderTodosConteudos();
  perfilCardAtualizar.classList.remove('esconder')
});

btnEditarSenha.addEventListener("click",() =>{
  esconderTodosConteudos();
  editarSenhaCard.classList.remove('esconder')
})

function esconderTodosConteudos() {
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
if (editarUsuarioCard) {
    editarUsuarioCard.classList.add('esconder');
}
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





// btnServicos.addEventListener("click", () => {
//   mainTitleCriar.className = "main-title";
//   mainTitleHistorico.className = "main-title";
//   mainCriarServicoCard.className = "main__servicos__card";
//   mostrarServicoCard.className += "main__servicos_card";
//   perfilContainer.className += "esconder";
// });