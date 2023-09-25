// Enviar o e-mail de redefinição de senha via invocação de endpoint Java.
var form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário.
    var email = document.getElementById("email").value;
    if (email) {
        fetch("https://sistema-voluntariado-backend.onrender.com/v1/api/usuario/redefinir-senha/email/" + email, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            if (response.status === 200) {
                alert("E-mail para redefinir a senha enviado com sucesso!");
            } else {
                alert("Ocorreu um erro ao enviar o e-mail para redefinir a senha. Por favor, tente novamente.");
            }
        })
        .catch(function(error) {
            alert("Ocorreu um erro ao enviar o e-mail para redefinir a senha. Por favor, tente novamente.");
            console.error(error);
        });
    } else {
        alert("Por favor, digite o seu e-mail.");
    }
});