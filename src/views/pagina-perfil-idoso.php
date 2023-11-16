<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Perfil do Usuário</title>
    <link rel="icon" type="image/png" href="../img/logosemfundo.png">

    <!-- Principal CSS -->
    <link rel="stylesheet" href="../css/pagina-perfil/pagina-perfil.css">


    <!-- Customized CSS -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- jquery -->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
</head>

<div class="container-fluid">

    <div class="row">
        <header style="background-color: blanchedalmond; width: 100%;
        height: 20vh;
        margin: 0;
        /* background-color: var(--MainColorLight); */
        display: flex;
        justify-content: flex-end;
        align-items: center;">
            <img src="../img/logosemfundo.png" alt="logo-site" style="width:210px;">
        </header>
    </div>
    <div id="wrapper">
        <div class="overlay"></div>


        <!-- Sidebar -->
        <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <div class="sidebar-header">
                    <div class="sidebar-brand">
                        <img class="logo-img" src="../img/et.png" alt="Foto do usuário">
                    </div>
                </div>

                <li>
                    <a href="#" id="btnHome-perfil-link">
                        <i class="bi bi-house"></i> Home
                    </a>
                </li>
                <li>
                    <a href="#" id="btnMostrar-perfil-link">
                        <i class="bi bi-house-door"></i> Perfil
                    </a>
                </li>
                <li>
                    <a href="#" id="btnMostrar-servicos-link">
                        <i class="bi bi-clock-history"></i> Serviços

                    </a>
                </li>

                <li class="dropdown">
                    <a href="#works" class="dropdown-toggle" data-toggle="dropdown"><i class="bi bi-tools"></i> Configurações <span class="caret"></span></a>
                    <ul class="dropdown-menu animated fadeInLeft" role="menu">
                        <div class="dropdown-header">Menu</div>
                        <li><a href="#" id="btnEditar-perfil-link">Editar Perfil</a></li>
                        <li><a href="#" id="btnEditar-senha-link">Senha</a></li>
                        <li><a href="# " id="btnDeletar-perfil-link">Exclusão</a></li>
                        <!-- <li><a href="#">Biblioteca</a></li>
                        <li><a href="">Eventos</a></li> -->
                    </ul>
                </li>
                <!-- <li><a href="#"> <i class="bi bi-lock"></i> Privacidade</a></li> -->
                <li><a id="btnSair-perfil-link" href="#"><i class="bi bi-door-closed"></i> Sair</a></li>

            </ul>
        </nav>
    </div>

    <div class="container">
        <main class="main esconder" style="" id="servico-main-content">
            <section class="main__servicos">
                <h2 class="main-title " id="criar-servico-title">
                    <i class="bi bi-search"></i>
                    Cadastrar
                </h2>

                <div class="container historico-card" style="display:grid; gap:2rem;">
                    <div class="main__servicos__card " id="mostrar-servico-card">
                        <div class="card__text">
                            <h4>Ação</h4>
                            <p>Cadastre seu serviço</p>
                        </div>
                        <div class="card__button" id="btnFazerCard" style="justify-content: center;">
                            <a id="button-mostrar-criar" href="#">Criar</a>
                        </div>
                    </div>
                </div>



                <h2 class="main-title" id="historico-title">
                    <span> <i class="bi bi-book"></i>
                        Histórico
                </h2>

                <div class="container historico-card" data-historico style="display:grid; gap:2rem; padding:15px;">
                    <div class="main__servicos__card " id="mostrar-servico-card">
                        <div class="card__text">
                            <h4>Eustáquio</h4>
                            <p>Serviço de Troca de lampada</p>
                        </div>
                        <div class="card__button-group">
                            <div class="card__button" id="btnMostrarServ">
                                <a href="#">Editar</a>
                            </div>
                            <div class="card__button" id="btnEXcluirServ">
                                <a href="#">Rejeitar</a>
                            </div>
                        </div>
                    </div>

                    <div class="main__servicos__card">
                        <div class="card__text">
                            <h4>Ana Francisca</h4>
                            <p>Serviço de Bate papo</p>
                        </div>
                        <div class="card__button-group">
                            <div class="card__button" id="btnAceitarServi">
                                <a href="#">Inutil</a>
                            </div>
                            <div class="card__button" id="btnEditarServi">
                                <a href="#">Editar</a>
                            </div>
                            <div class="card__button" id="btnEXcluirServ">
                                <a href="#">Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="main__servicos__card">
                            <div class="card__text">
                                <h4>Ana Francisca</h4>
                                <p>Serviço de Bate papo</p>
                            </div>
                            <div class="card__button-group">
                                <div class="card__button" id="btnAceitarServi">
                                    <a href="#">Aceitar</a>
                                </div>
                                <div class="card__button" id="btnEditarServi">
                                    <a href="#">Editar</a>
                                </div>
                                <div class="card__button" id="btnEXcluirServ">
                                    <a href="#">Excluir</a>
                                </div>
                            </div>
                        </div>

                        <div class="main__servicos__card">
                            <div class="card__text">
                                <h4>Ana Francisca</h4>
                                <p>Serviço de Bate papo</p>
                            </div>
                            <div class="card__button-group">
                                <div class="card__button" id="btnAceitarServi">
                                    <a href="#">Aceitar</a>
                                </div>
                                <div class="card__button" id="btnEditarServi">
                                    <a href="#">Editar</a>
                                </div>
                                <div class="card__button" id="btnEXcluirServ">
                                    <a href="#">Excluir</a>
                                </div>
                            </div>
                        </div> -->
            </section>


        </main>

    </div>


    <!-- Bem vindo contéudo -->
    <div class="container-xxl bg-light my-6 py-6 pt-0 conteudo-bemvindo esconder" style="background-color: #D3D3D3;" id="content-bemvindo">
        <div class="input-group" style="justify-content: flex-end ; margin-top: 5px;">
            <div class="form-outline">
                <input id="search-input" type="search" class="form-control" placeholder="Buscar Usuário" />
            </div>
            <button id="btnBuscar-usuario" type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
            </button>

        </div>
        <div class="user-list-controller" style="justify-content: flex-end;">
            <div id="user-list-container" style=" display: flex;
    ">
                <div class="item-usuario" data-usuario="nome-usuario-1">
                    <!-- Conteúdo do elemento de usuário -->
                </div>
                <div class="item-usuario" data-usuario="nome-usuario-2">
                    <!-- Conteúdo do elemento de usuário -->
                </div>

            </div>
        </div>
        <div class="container">


            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <h2 class="display-6 mb-2" style="color:var(--SecondaryColor);padding-top: 10px;">Olá, <span data-nameuser class="display-user" style="color:#ebac8b;">-UsuariodoBanco-</span></h2>

            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div id="lampadas" class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div class="text-center p-4">
                            <h3 class="mb-3">Troca de Lâmpadas Altas</h3>
                            <span>Substituir lâmpadas em locais de difícil acesso, proporcionando iluminação adequada e segurança.</span>
                        </div>
                        <div class="position-relative mt-auto">
                            <img class="img-fluid" src="../img/lampada-frent-1.jpeg" alt="">
                            <div class="product-overlay">
                                <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="bi bi-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div id="passeios" class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div class="text-center p-4">
                            <h3 class="mb-3">Passeio</h3>
                            <span>Ajudar a garantir que os animais de estimação dos idosos tenham seu tempo de lazer e exercício, trazendo alegria e aliviando o fardo.</span>
                        </div>
                        <div class="position-relative mt-auto">
                            <img class="img-fluid" src="../img/passeio.jpg" alt="">
                            <div class="product-overlay">
                                <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="bi bi-eye"></i></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div id="servicos" class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div class="text-center p-4">
                            <h4 class="mb-3">Pequenos Reparos</h4>
                            <span>Auxiliar em reparos simples, como consertar uma torneira que pinga ou ajustar uma prateleira instável, melhorando o conforto do ambiente.</span>
                        </div>
                        <div class="position-relative mt-auto">
                            <img class="img-fluid" src="../img/encanador-frent-2.jpg" alt="">
                            <div class="product-overlay">
                                <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="bi bi-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div class="text-center p-4">
                            <h4 class="mb-3">Serviços</h4>
                            <span>Diversos serviços para auxiliar em seu dia-a-dia.</span>
                        </div>
                        <div class="position-relative mt-auto">
                            <img class="img-fluid" src="../img/compras.jpg" alt="">
                            <div class="product-overlay">
                                <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="bi bi-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Contéudo -->
    <div id="page-content-wrapper">
        <button type="button" class="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
        </button>

        <div class="container">

            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">


                    <!-- Editar senha trigger  -->

                    <div class="card__form esconder" id="form-senha-usuario" style="padding:30px">
                        <form>
                            <div class="form-icon">
                                <span><i class="icon icon-user"></i></span>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control item" id="antigo-senha" placeholder="Antiga Senha" required oninvalid="this.setCustomValidity('Por favor, preencha este campo.')">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control item" id="nova-senha" placeholder="Nova Senha" required oninvalid="this.setCustomValidity('Por favor, preencha este campo.')">
                            </div>

                            <div class="form-group">
                                <button class="form-control item" type="button" id="btnSalvarSenha" style="margin-top:10px">Salvar</button>
                            </div>
                        </form>
                    </div>


                    <!-- Editar usuario trigger  -->

                    <div class="card__form esconder" id="form-usuario-senha" style="padding:30px">
                        <form>
                            <div class="form-icon">
                                <span><i class="icon icon-user"></i></span>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="antigo-usuario" placeholder="Antigo Usuário" required oninvalid="this.setCustomValidity('Por favor, preencha este campo.')">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="novo-usuario" placeholder="Novo Usuário" required oninvalid="this.setCustomValidity('Por favor, preencha este campo.')">
                            </div>

                            <div class="form-group">
                                <button class="form-control item" type="button" id="btnSalvarUsuario" style="margin-top:10px">Salvar</button>
                            </div>
                        </form>
                    </div>


                    <!-- Formulario de Perfil / display only -->
                    <div class="card__form_perfil esconder" id="registration-form-perfil-display" style="height:fit-content; display:flex;">
                        <form style="width:80%;">
                            <div class="form-icon">
                                <span><img class="logo-img" src="../img/et.png" alt="Foto do usuário" style="margin:20px;"></span>
                            </div>

                            <div class="form-group">
                                <label for="usuario-perfil-display">Usuário:</label>
                                <input type="text" class="form-control item" id="usuario-perfil-display" placeholder="Usuário" readonly>

                            </div>
                            <div class="form-group">
                                <label for="nome-perfil-display">Nome:</label>
                                <input type="text" class="form-control item" id="nome-perfil-display" placeholder="Nome" readonly>
                            </div>
                            <div class="form-group">
                                <label for="email-perfil-display">E-mail:</label>
                                <input type="text" class="form-control item" id="email-perfil-display" placeholder="E-mail" readonly>
                            </div>
                            <div class="form-group">
                                <label for="telefone-perfil-display">Telefone:</label>
                                <input type="text" class="form-control item" id="numero-perfil-display" placeholder="Telefone" readonly>
                            </div>
                            <div class="form-group">
                                <label for="endereco-perfil-display">Endereço</label>
                                <input type="text" class="form-control item" id="endereço-perfil-display" placeholder="Endereço" readonly>
                            </div>
                            <div class="form-group">
                                <label for="bloco-perfil-display">Bloco:</label>
                                <input type="text" class="form-control item" id="bloco-perfil-display" placeholder="Bloco" readonly>
                            </div>

                            <div class="form-group">
                                <label for="numerocasa-perfil-display">Número:</label>
                                <input type="text" class="form-control item" id="numerocasa-perfil-display" placeholder="Número" readonly>
                            </div>
                            <div class="form-group">
                                <label for="bairro-perfil-display">Bairro:</label>
                                <input type="text" class="form-control item" id="bairro-perfil-display" placeholder="Bairro" readonly>
                            </div>
                            <div class="form-group">
                                <label for="cidade-perfil-display">Cidade:</label>
                                <input type="text" class="form-control item" id="cidade-perfil-display" placeholder="Cidade" readonly>
                            </div>
                            <div class="form-group">
                                <label for="estado-perfil-display">Estado:</label>
                                <input type="text" class="form-control item" id="estado-perfil-display" placeholder="Estado" readonly>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="idade-perfil-display" placeholder="Idade" readonly>
                            </div>

                        </form>
                    </div>



                    <!-- Formulário Perfil salvos como atualizações -->

                    <div class="card__form_perfil esconder" id="registration-form-perfil-atualizar" style="height: fit-content;">
                        <form style="width: 80%;">
                            <div class="form-icon">
                                <span><img class="logo-img" src="../img/et.png" alt="Foto do usuário" style="margin: 20px;"></span>
                            </div>
                            <div class="form-group">
                                <label for="usuario-perfil-display">Novo Usuário:</label>
                                <input type="text" class="form-control item" id="usuario-perfil" placeholder="Usuário">
                            </div>
                            <div class="form-group">
                                <label for="nome-perfil-display">Novo Nome:</label>
                                <input type="text" class="form-control item" id="nome-perfil" placeholder="Nome">
                            </div>
                            <div class="form-group">
                                <label for="email-perfil-display">Novo E-mail:</label>
                                <input type="text" class="form-control item" id="email-perfil" placeholder="E-mail">
                            </div>
                            <div class="form-group">
                                <label for="telefone-perfil-display">Novo Telefone:</label>
                                <input type="text" class="form-control item" id="numero-perfil" placeholder="Telefone">
                            </div>
                            <div class="form-group">
                                <label for="endereco-perfil-display">Novo Endereço</label>
                                <input type="text" class="form-control item" id="endereço-perfil" placeholder="Endereço">
                            </div>
                            <div class="form-group">
                                <label for="bloco-perfil-display">Novo Bloco:</label>
                                <input type="text" class="form-control item" id="bloco-perfil" placeholder="Bloco">
                            </div>

                            <div class="form-group">
                                <label for="numerocasa-perfil-display">Novo Numero:</label>
                                <input type="text" class="form-control item" id="numerocasa-perfil" placeholder="Número">
                            </div>
                            <div class="form-group">
                                <label for="bairro-perfil-display">Novo Bairro:</label>
                                <input type="text" class="form-control item" id="bairro-perfil" placeholder="Bairro">
                            </div>
                            <div class="form-group">
                                <label for="cidade-perfil-display">Nova Cidade:</label>
                                <input type="text" class="form-control item" id="cidade-perfil" placeholder="Cidade">
                            </div>
                            <div class="form-group">
                                <label for="estado-perfil-display">Novo Estado:</label>
                                <input type="text" class="form-control item" id="estado-perfil" placeholder="Estado">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="idade-perfil" placeholder="Idade">
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-block create-account">Salvar</button>
                            </div>
                        </form>
                    </div>

                    <!-- Card para deletar perfil -->

                    <div class="main__servicos__card esconder " id="exclusao-card">
                        <div class="card__text">
                            <h4>Usuário</h4>
                            <p>Deseja excluir conta?</p>
                        </div>
                        <div class="card__button-group">
                            <div class="card__button">
                                <a href="#" id="btnExcluirContaSim">Sim</a>
                            </div>
                            <div class="card__button">
                                <a href="#" id="btnExcluirContaNao">Não</a>
                            </div>
                        </div>
                    </div>


                    <!-- Formulario de serviço -->
                    <div class="card__form_serv esconder" id="registration-form-servico" style="">
                        <form>
                            <div class="form-icon">
                                <span><i class="icon icon-user"></i></span>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="destino-form" placeholder="Destino">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="ordem-descricao-form" placeholder="Descrição">
                            </div>
                            <div class="form-group">
                                <label for="serviceSelect-form">Selecione o Serviço:</label>
                                <select id="serviceSelect-form" class="form-control" style="background-color:#fdf5eb;">
                                    <option value="Elétrica">Elétrica</option>
                                    <option value="Pequenos Reparos">Pequenos Reparos</option>
                                    <option value="Passeio">Passeio</option>
                                    <option value="Manuntenção">Manuntenção</option>
                                    <option value="Utensilios">Utensilios</option>
                                    <option value="Informática">Informática</option>
                                    <option value="outros">Outros Serviços</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <button type="button" data-button-servico class="btn btn-block create-account">Salvar</button>
                            </div>

                        </form>
                        <div id="validationMessage" style="color: red;"></div>
                    </div>

                    <!-- Serviços mostrar -->
                    <div class="card__form_serv esconder" id="registration-form-mostrar" style="padding: 50px;">
                        <form>
                            <div class="form-icon">
                                <span><i class="icon icon-user"></i></span>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="destino-form" placeholder="Destino" readonly>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="ordem-descricao-form" placeholder="Descrição" readonly>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="status-ordem-form" placeholder="Status" readonly>
                            </div>
                        </form>
                        <div id="validationMessage" style="color: red;"></div>
                    </div>


                    <!-- Edição de Servicos -->

                    <div class="card__form_serv esconder" id="registration-form-editar" style="">

                        <form>
                            <div class="form-icon">
                                <span><i class="icon icon-user"></i></span>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="destino-form" placeholder="Destino" required oninvalid="this.setCustomValidity('Por favor, preencha este campo.')">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control item" id="ordem-descricao-form" placeholder="Descrição" required oninvalid="this.setCustomValidity('Por favor, preencha este campo.')">
                            </div>
                            <div class="form-group">
                                <label for="serviceSelect-form">Selecione o Serviço:</label>
                                <select id="serviceSelect-form" class="form-control" style="background-color:#fdf5eb;">
                                    <option value="1">Lâmpadas</option>
                                    <option value="2">Pequenos Reparos</option>
                                    <option value="3">Passeio</option>
                                    <option value="4">Outros Serviços</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button type="button">Salvar</button>
                            </div>

                        </form>
                        <div id="validationMessage" style="color: red;"></div>
                    </div>





                </div>
            </div>
        </div>
        <!-- /#Conteúdo -->

    </div>

    <!-- /#wrapper -->
    <?php
    include("../../php/footer.php")
    ?>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script type="module" src="../js/pagina-perfil/pagina-perfil.js"></script>
    </body>

</html>
