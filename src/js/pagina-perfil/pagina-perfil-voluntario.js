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
  console.log(perfilContainer);
  const servicosContainer = document.querySelector('#mostrar-servico-card');
  const btnServicos = document.querySelector('#btnMostrar-servicos-link');

  
  btnMostrarPerfil.addEventListener('click', () => {
    perfilContainer.className = "";
    // console.log(perfilContainer);
    servicosContainer.className += "esconder";
  });

  btnServicos.addEventListener('click',()=>{
    servicosContainer.classList.add('visivel')
    servicosContainer.classList.remove('esconder')
  })

 
  