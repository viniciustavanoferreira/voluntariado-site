// Eventos de Botões;

document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector(".main");
    const mostrarPerfilButton = document.getElementById("btnmostrar-perfil");
    const registrationFormPerfil = document.getElementById("registration-form-perfil");
    const btnFazerCard = document.getElementById("btnFazerCard");
    const registrationForm = document.getElementById("registration-form");
    const btnServico = document.getElementById("btnServico");

    // Function to show/hide the profile registration form
    function toggleProfileForm() {
        registrationFormPerfil.classList.toggle("hidden");
        mainContent.style.display = registrationFormPerfil.classList.contains("hidden") ? "block" : "none";
    }

    // Function to show/hide the service registration form
    function toggleServiceForm() {
        registrationForm.classList.toggle("hidden");
        mainContent.style.display = registrationForm.classList.contains("hidden") ? "block" : "none";
    }

    // Event listener for "Mostrar Perfil" button
    mostrarPerfilButton.addEventListener("click", function () {
        toggleProfileForm();
    });

    // Event listener for "Criar Serviço" button
    btnFazerCard.addEventListener("click", function () {
        toggleServiceForm();
    });

    // Event listener for "Serviço" button
    btnServico.addEventListener("click", function () {
        // Show main content
        mainContent.style.display = "block";
        // Hide any specific forms if they are displayed
        registrationFormPerfil.classList.add("hidden");
        registrationForm.classList.add("hidden");
    });
});


    // ajeitar esse botão q nao está funcionando btnEditaServ.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     showForm();
    // });