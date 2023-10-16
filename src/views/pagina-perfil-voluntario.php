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
                    <a href="#registration-form-perfil" id="btnMostrar-perfil-link">
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
                        <li><a href="#">Biblioteca</a></li>
                        <li><a href="">Eventos</a></li>
                    </ul>
                </li>
                <li><a href="#"> <i class="bi bi-lock"></i> Privacidade</a></li>
                <li><a href="#" id="btnSair-perfil-link"><i class="bi bi-door-closed"></i> Sair</a></li>

            </ul>
        </nav>

        <div class="container">
            <div class="row" <main class="main esconder" style="" id="servico-main-content">
                <!-- Criar servico -->

                <h2 class="main-title" id="historico-title">
                    <span> <i class="bi bi-book"></i>
                        Histórico
                </h2>
                <span>


                    <section class="main__servicos">
                        <div class="main__servicos__card " id="mostrar-servico-card">
                            <div class="card__text">
                                <h4>Eustáquio</h4>
                                <p>Serviço de Troca de lampada</p>
                            </div>
                            <div class="card__button-group">
                                <div class="card__button" id="btnAceitarServi">
                                    <a href="#">Aceitar</a>
                                </div>
                                <div class="card__button" id="btnMostrarServ">
                                    <a href="#">Mostrar</a>
                                </div>
                                <div class="card__button" id="btnEXcluirServ">
                                    <a href="#">Excluir</a>
                                </div>
                            </div>
                        </div>
                        <!--
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


                            <!-- Editar usuario trigger  -->

                            <div class="card__form esconder" id="form-senha-usuario" style="padding:30px">
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

                                    <!-- Formulario de Perfil -->
                                    <div class="card__form_perfil esconder" id="registration-form-perfil" style="height:fit-content;">
                                        <form style="width:80%;">
                                            <div class="form-icon">
                                                <span><img class="logo-img" src="../img/et.png" alt="Foto do usuário" style="margin:20px;"></span>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="usuario-perfil" placeholder="Usuário" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="nome-perfil" placeholder="Nome" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="email-perfil" placeholder="E-mail" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="numero-perfil" placeholder="Telefone" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="endereço-perfil" placeholder="Endereço" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="bloco-perfil" placeholder="Bloco" readonly>
                                            </div>

                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="número-perfil" placeholder="Número" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="bairro-perfil" placeholder="Bairro" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="cidade-perfil" placeholder="Cidade" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="estado-perfil" placeholder="Estado" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="idade-perfil" placeholder="Idade" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="assRequerida-perfil" placeholder="Assistencia Requerida" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="condicao-perfil" placeholder="Condição Saúde" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="preferencia-perfil" placeholder="Preferência" readonly>
                                            </div>

                                            <div class="form-group">
                                                <button type="button" class="btn btn-block create-account">Salvar</button>
                                            </div>
                                        </form>
                                    </div>



                                    <!-- Formulario de serviço -->
                                    <div class="card__form_serv esconder" id="registration-form-servico" style="">
                                        <form>
                                            <div class="form-icon">
                                                <span><i class="icon icon-user"></i></span>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="destino-form-static" placeholder="Destino" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="ordem-descricao-form-static" placeholder="Descrição" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="estado-perfil-static" placeholder="Status" readonly>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control item" id="idade-perfil-static" placeholder="Idade" readonly>
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
                                                <label for="serviceSelect">Selecione o Serviço:</label>
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


            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            <script src="../js/pagina-perfil/pagina-perfil-voluntario.js">
                console.log("teste")
            </script>
            </body>

</html>
