<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="/pgprincipal.css" /> -->
    <title>Bom Vizinho | Serviços</title>
    <!-- Customized CSS -->

    <!-- <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" /> -->

    <!-- Principal CSS -->

    <link rel="stylesheet" href="../../pgprincipal.css" />
    <link rel="stylesheet" href="../../src/css/servicos/servicos.css" />


    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Font Styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</head>

<body>
    <header class="header">
        <img src="../img/logo.jpg" alt="">
        <h2 class="header__title">Seja bem vindo, visitante!</h2>
    </header>

    <div class="sidebar__navgation">
                <button id ="mostrar-perfil">
                    <span>
                        <i class="material-symbols-outlined">SERVIÇO</i>
                        
                    </span>

                </button>

    <div class="teste">
    <div id="registration-form" class="hidden" style="display: flex;
    justify-content: center;">

                    <form>
                        <div class="form-icon">
                            <span><i class="icon icon-user"></i></span>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="username" placeholder="Tipo de Serviço">
                        </div>
                        <div class="form-group">
                            <!-- // linkar quem é esse tipo de usuario -->
                            <input type="text" class="form-control item" id="password" placeholder="Usuario">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Nome">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="email" placeholder="Ordem">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="phone-number" placeholder="Inicio do Serviço">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="birth-date" placeholder="Fim do Serviço">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Destino">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Status">
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-block create-account">Salvar</button>
                        </div>
            
                    </form>
            </div>
            
    </div>

    <script>
    document.addEventListener("DOMContentLoaded", function () {
        const mainContent = document.querySelector(".main");

        const mostrarPerfilButton = document.getElementById("mostrar-perfil");
        const registrationForm = document.getElementById("registration-form");
        const saveButton = document.querySelector("#registration-form button.create-account");

        mostrarPerfilButton.addEventListener("click", function () {
            
            registrationForm.classList.toggle("hidden");
            
            mainContent.style.display = "none";
        });
    });


    </script>

    <div class="container-servicos">
        <aside class="aside">Lateral</aside>
        <main class="main">
            <h3>O que deseja hoje?</h3>
            <section class="main__servicos">
                <div class="main__servicos__card">
                    <div class="card__text">
                        <h4>Trocar lampada</h4>
                        <p>Serviço realizado por um voluntário para troca de lampada</p>
                    </div>
                    <div class="card__button">
                        <a href="#">Selecionar</a>
                    </div>
                </div>
                <div class="main__servicos__card">
                    <div class="card__text">
                        <h4>Bate papo</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci consectetur autem distinctio eveniet beata</p>
                    </div>
                    <div class="card__button">
                        <a href="#">Selecionar</a>
                    </div>
                </div>
                <div class="main__servicos__card">
                    <div class="card__text">
                        <h4>Passeio com animais</h4>
                        <p>Lorem ipsum</p>
                    </div>
                    <div class="card__button">
                        <a href="#">Selecionar</a>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top custom "><i class="bi bi-arrow-up"></i></a>
    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <script src="index.js"></script>
</body>

</html>
