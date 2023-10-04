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

  
  // Toggle Perfi

  $(document).ready(function () {
    // Attach a click event handler to the link
    $("#btnMostrar-perfil-link").click(function (e) {
        e.preventDefault(); // Prevent the link from navigating
        $("#registration-form-perfil").toggle(); // Toggle the profile form's visibility
    });
});


