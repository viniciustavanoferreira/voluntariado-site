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

  const btnMostrarPerfil = document.querySelector('#btnMostrar-perfil-link');
  const perfilContainer = document.querySelector('#registration-form-perfil');
  const btnServicos = document.querySelector('#btnMostrar-servicos-link');
  const mainTitleCriar = document.querySelector('#criar-servico-title');
  const mainTitleHistorico = document.querySelector('#historico-title');
  const mainCriarServicoCard = document.querySelector('#make-service');
  const mostrarServicoCard = document.querySelector('#mostrar-servico-card');
  const btnEditarPerfil = document.querySelector('#btnEditar-perfil-link');
  const btnEditarSenha = document.querySelector('#btnEditar-senha-link');
  const editarSenhaContainer = document.querySelector('#form-senha-usuario');

  
  btnMostrarPerfil.addEventListener('click', () => {
    perfilContainer.className = "card__form_perfil";
    
  
  });

  btnServicos.addEventListener('click', () => {
    mainTitleCriar.className = "main-title";
    mainTitleHistorico.className = "main-title";
    mainCriarServicoCard.className = "main__servicos__card";
    mostrarServicoCard.className += "main__servicos_card";
    perfilContainer.className += "esconder";
    
  });

  btnEditarPerfil.addEventListener('click',() =>{
// tem que criar
  });

  btnEditarSenha.addEventListener('click',() =>{
    editarSenhaContainer.className += "card__form";
    mainTitleCriar.className = "esconder";
    mainTitleHistorico.className = "esconder";
    mainCriarServicoCard.className = "esconder";
    mostrarServicoCard.className = "esconder";
    perfilContainer.className = "esconder";



  });



 
 
  