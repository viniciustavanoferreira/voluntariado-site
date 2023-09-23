<!DOCTYPE html>
<html>

<head>
    <title>Perfil do Usuário</title>
    <link rel="stylesheet" href="../pgprincipal.css">
    
    

    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Font Styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</head>

<body>

    <header class="header">
        <h1 class="header__title">Seja bem vindo, voluntário!</h1>
        <img src="../src/img/logo.jpg" alt="logo-site">
    </header>

    <aside class="sidebar border">
        <header class="sidebar-header">
            <img class="logo-img" src="../src/img/et.png" alt="Foto do usuário">
        </header>

        <nav>
            <div class="sidebar__navgation">
                <button id ="mostrar-perfil">
                    <span>
                        <i class="material-symbols-outlined">Home</i>
                        <span>Profile</span>
                    </span>

                </button>
                

                <button>
                    <span>
                        <i class="material-symbols-outlined">tag</i>
                        <span>Perfil</span>
                    </span>
                </button>
            </div>

            <button>
                <span>
                    <i class="material-symbols-outlined">tag</i>
                    <span>Sair</span>
                </span>
            </button>
        </nav>
    </aside>


    <!--menu mobile-->

    <button class="button-mobile" onclick="toggleMenu()">
        <i class="material-symbols-outlined">menu</i>
        <span>Menu</span>
    </button>

    <nav class="menu-mobile" id="menu-mobile">
        <button class="button-close" onclick="toggleMenu()">
            <span>
                <i class="material-symbols-outlined">close</i>
            </span>
        </button>

        <button>
            <span>
                <i class="material-symbols-outlined"> Home </i>
                <span class="mobile-text">Home</span>
            </span>
        </button>

        <button>
            <span>
                <i class="material-symbols-outlined"> tag </i>
                <span class="mobile-text">Sair</span>
            </span>
        </button>
    </nav>

    <div class="teste">
    <div id="registration-form" class="hidden" style="display: flex;
    justify-content: center;">

                    <form>
                        <div class="form-icon">
                            <span><i class="icon icon-user"></i></span>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="username" placeholder="Usuário">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Senha">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="idSenha">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="phone-number" placeholder="Endereço">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="birth-date" placeholder="Nascimento">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Bloco">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Numero">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Visitante?">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Disponibilidade">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="idUsuarioVoluntario">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Preferencia">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control item" id="password" placeholder="Habilidade">
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

    <main class="main">
        <h2 class="main-title">Serviços Disponiveis</h2>

        <section class="main__servicos">
            <div class="main__servicos__card">
                <div class="card__text">
                    <h4>Eustáquio</h4>
                    <p>Serviço de Troca de lampada</p>
                </div>
                <div class="card__button">
                    <a href="#">Aceitar</a>
                </div>
                <div class="card__button">
                    <a href="#">Rejeitar</a>
                </div>
            </div>

            <div class="main__servicos__card">
                <div class="card__text">
                    <h4>Ana Francisca</h4>
                    <p>Serviço de Bate papo</p>
                </div>
                <div class="card__button">
                    <a href="#">Aceitar</a>
                </div>
                <div class="card__button">
                    <a href="#">Rejeitar</a>
                </div>
            </div>

            <div class="main__servicos__card">
                <div class="card__text">
                    <h4>Ana Francisca</h4>
                    <p>Serviço de Bate papo</p>
                </div>
                <div class="card__button">
                    <a href="#">Aceitar</a>
                </div>
                <div class="card__button">
                    <a href="#">Rejeitar</a>
                </div>
            </div>

            <div class="main__servicos__card">
                <div class="card__text">
                    <h4>Ana Francisca</h4>
                    <p>Serviço de Bate papo</p>
                </div>
                <div class="card__button">
                    <a href="#">Aceitar</a>
                </div>
                <div class="card__button">
                    <a href="#">Rejeitar</a>
                </div>
            </div>
        </section>

    </main>

    <script type="module" src="../src/js/perfil-voluntario/pagina-perfil.js"></script>
</body>

</html>
