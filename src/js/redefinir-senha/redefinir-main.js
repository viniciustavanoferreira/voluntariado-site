// Enviar o e-mail de redefinição de senha via invocação de endpoint Java.
var form = document.getElementById("form"); 
form.addEventListener("submit", function(event) { 
    event.preventDefault(); // Prevenir o comportamento padrão do formulário.
    var email = document.getElementById("email").value; 
    if (email) { 
        // Aqui dá usar a biblioteca que preferir, como jQuery, Axios, Fetch, etc.
        // Neste exemplo, usei o objeto XMLHttpRequest nativo do JavaScript.
        var xhr = new XMLHttpRequest(); // Criar um novo objeto XMLHttpRequest
        xhr.open("POST", "http://sistema-voluntariado-backend.onrender.com/v1/api/usuario/resetar-senha/email/"  + email); // Abrir uma conexão do tipo POST para a URL que vai enviar o e-mail
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onload = function() { 
            if (xhr.status == 200) { 
                alert("E-mail de redefinição de senha enviado com sucesso!"); 
            } else { 
                alert("Ocorreu um erro ao enviar o e-mail de redefinição de senha. Por favor, tente novamente.");
            }
        };
    } else { 
        alert("Por favor, digite o seu e-mail."); 
    }
});