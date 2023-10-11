<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Perfil do Usuário</title>
    <link rel="icon" type="image/png" href="../src/img/logosemfundo.png">

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

<header class="header h-100" style="background-color:blanchedalmond; ">
       
        <img src="../src/img/logosemfundo.png" alt="logo-site">
    </header>



<div class="container-fluid">
  <div class="row">
    <nav class="col-md-3 col-lg-2 col-12 d-md-block sidebar" style="padding-top: 120px; background-color:#DCDCDC">
    <header class="sidebar-header">
            <img class="logo-img" src="../src/img/et.png" alt="Foto do usuário">
        </header>


      <!-- Conteúdo da barra lateral aqui -->

      
      <div class="sidebar__navgation">
            
                <button id="btnMostrar-perfil">
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

    <section class ="config-card" style="display:none;">
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

        <div class="container-xxl bg-light my-6 py-6 pt-0" style="background-color: #D3D3D3;">
            <div class="container">

                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                    <h2 class="display-6 mb-2" style="color:var(--SecondaryColor)">Nossos Serviços</h2>

                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div id="lampadas" class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                            <div class="text-center p-4">
                                <h3 class="mb-3">Troca de Lâmpadas Altas</h3>
                                <span>Substituir lâmpadas em locais de difícil acesso, proporcionando iluminação adequada e segurança.</span>
                            </div>
                            <div class="position-relative mt-auto">
                                <img class="img-fluid" src="./src/img/lampada-frent-1.jpeg" alt="">
                                <div class="product-overlay">
                                    <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="bi bi-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div id="passeios"class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                            <div class="text-center p-4">
                                <h3 class="mb-3">Passeio</h3>
                                <span>Ajudar a garantir que os animais de estimação dos idosos tenham seu tempo de lazer e exercício, trazendo alegria e aliviando o fardo.</span>
                            </div>
                            <div class="position-relative mt-auto">
                                <img class="img-fluid" src="./src/img/passeio.jpg" alt="">
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
                                <img class="img-fluid" src="./src/img/encanador-frent-2.jpg" alt="">
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
                                <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                            </div>
                            <div class="position-relative mt-auto">
                                <img class="img-fluid" src="./src/img/compras.jpg" alt="">
                                <div class="product-overlay">
                                    <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="bi bi-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!-- Formulário de exibição e edição de perfil -->

<div class="card__form_perfil form-control-lg form-control-sm" id="registration-form-perfil" style="height:fit-content; display:none;">
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

    <!-- Formulario de Serviço -->

<div class="card__form_serv form-control-lg form-control-sm" id="registration-form-servico" style="display:none;">
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
    
     <!-- Edição de Servicos -->

     <div class="card__form form-control-lg form-control-sm" id="registration-form-editar" style="display:none;">
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



    <main class="main" style="display:none;" id="servico-main-content">
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
       

    </main>

    <script src="../src/js/perfil.js"></script>
    
</body>

</html>