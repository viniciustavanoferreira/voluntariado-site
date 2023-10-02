<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Perfil do Usuário</title>
    <link rel="icon" type="image/png" href="./src/img/logosemfundo.png">

        <!-- Principal CSS -->
    <link rel="stylesheet" href="../pgprincipal.css">
    
    <!-- Customized CSS -->

    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css" />



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

<header class="header h-100" style="background-color:blanchedalmond;">
       
        <img src="../src/img/logosemfundo.png" alt="logo-site">
    </header>



<div class="container-fluid">
  <div class="row">
    <nav class="col-md-3 col-lg-2 d-md-block sidebar" style="padding-top: 120px; background-color:#DCDCDC">
    <header class="sidebar-header">
            <img class="logo-img" src="../src/img/et.png" alt="Foto do usuário">
        </header>
      <!-- Conteúdo da barra lateral aqui -->

      
      <div class="sidebar__navgation">
                <button id="btnmostrar-perfil">
                    <span>
                        <i class="bi bi-house-door"></i>
                        <span>Perfil</span>
                    </span>

                </button>

                <button id="btnServico">
                    <span>
                        <i class="bi bi-clock-history"></i>
                        <span>Serviços</span>
                    </span>
                </button>


                <button id="btnConfig">
                    <span>
                        <i class="bi bi-tools"></i>
                        <span>Configurações</span>
                    </span>
                </button>

                <button id="btnPriv">
                    <span>
                        <i class="bi bi-lock"></i>
                        <span>Privacidade e Senha</span>
                    </span>
                </button>

                <div class="button-container">
                <button id="btnVoltar">
                    <span>
                        <i class="bi bi-box-arrow-right"></i>
                        <span>Voltar</span>
                    </span>
                </button>


                <button id="btnSair">
                    <span>
                    <i class="bi bi-door-closed"></i>
                        <span>Logout</span>
                    </span>
                </button>
                    
                </div>
    </nav>
    
  </div>
</div>
        
    </aside>



    
<!-- Formulario de Serviço -->

<div class="card__form hidden form-control-lg form-control-sm" id="registration-form">
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
            <button type="button" class="btn btn-block create-account">Salvar</button>
            </div>
        </form>
        <div id="validationMessage" style="color: red;"></div>
    </div>
    
     <!-- Formulário de exibição e edição de perfil -->

     <div class="card__form hidden form-control-lg form-control-sm" id="registration-form-perfil">
        <form>
            <div class="form-icon">
                <span><img class="logo-img" src="../src/img/et.png" alt="Foto do usuário"></span>
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
                <input type="text" class="form-control item" id="endereço-perfil" placeholder="Endereço" readonly>
            </div>
            <div class="form-group">
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
            
        </form>
    </div>

    <main class="main" id="hidden-main" style="display:none;">
        <!-- Criar servico -->
    <h2 class="main-title"  id="criar-servico-title">
            <span> <i class="bi bi-pen"></i>
            Criar Serviço</h2>
            <span> 
    
            <div class="main__servicos__card" id="make-service" >
                <div class="card__text">
                    <h4>Ação</h4>
                    <p>Cadastre seu serviço</p>
                </div>
                
                <div class="card__button" id ="btnFazerCard" style="justify-content: center;">
                    <a href="#">Fazer</a>
                </div>
                
            </div>
            
            <!-- Histórico -->
        <h2 class="main-title" id="historico-title">
            <span> <i class="bi bi-book"></i>
            Histórico</h2>
            <span>


        <section class="main__servicos">
            <div class="main__servicos__card">
                <div class="card__text">
                    <h4>Eustáquio</h4>
                    <p>Serviço de Troca de lampada</p>
                </div>
                <div class= "card__button-group">
                <div class="card__button" id="btnAceitarServi">
                    <a href="#">Aceitar</a>
                </div>
                <div class="card__button" id="btnEditaServ">
                    <a href="#">Editar</a>
                </div>
                <div class="card__button" id="btnEXcluirServ" >
                    <a href="#">Excluir</a>
                </div>
                 </div>
            </div>

            <div class="main__servicos__card">
                <div class="card__text">
                    <h4>Ana Francisca</h4>
                    <p>Serviço de Bate papo</p>
                </div>
                <div class= "card__button-group">
                <div class="card__button" id="btnAceitarServi">
                    <a href="#">Aceitar</a>
                </div>
                <div class="card__button" id="btnEditarServi">
                    <a href="#">Editar</a>
                </div>
                <div class="card__button" id="btnEXcluirServ" >
                    <a href="#">Excluir</a>
                </div>
                 </div>
            </div>

            <div class="main__servicos__card">
                <div class="card__text">
                    <h4>Ana Francisca</h4>
                    <p>Serviço de Bate papo</p>
                </div>
                <div class= "card__button-group">
                <div class="card__button" id="btnAceitarServi">
                    <a href="#">Aceitar</a>
                </div>
                <div class="card__button" id="btnEditarServi">
                    <a href="#">Editar</a>
                </div>
                <div class="card__button" id="btnEXcluirServ" >
                    <a href="#">Excluir</a>
                </div>
                 </div>
            </div>

            <div class="main__servicos__card">
                <div class="card__text">
                    <h4>Ana Francisca</h4>
                    <p>Serviço de Bate papo</p>
                </div>
                <div class= "card__button-group">
                <div class="card__button" id="btnAceitarServi">
                    <a href="#">Aceitar</a>
                </div>
                <div class="card__button" id="btnEditarServi">
                    <a href="#">Editar</a>
                </div>
                <div class="card__button" id="btnEXcluirServ" >
                    <a href="#">Excluir</a>
                </div>
                 </div>
            </div>
        </section>

        <!-- Edição de Servicos -->

        <div class="card__form hidden form-control-lg form-control-sm" id="registration-form" style="display:none;">
        <form id="serviceForm">
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
            <button type="button" class="btn btn-block create-account">Salvar</button>
            </div>
        </form>
        <div id="validationMessage" style="color: red;"></div>
    </div>

    </main>

    <script type="module" src="../src/js/perfil.js"></script>
</body>

</html>