<!DOCTYPE html>
<html lang="en">
<!-- página inicial do nosso site -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Bom Vizinho</title>
    <link rel="icon" type="image/png" href="./src/img/logosemfundo.png">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap" rel="stylesheet" />
    <!-- Customized CSS -->

    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />

    <!-- Principal CSS -->

    <link rel="stylesheet" href="pgprincipal.css" />

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

    <!-- Header Start -->

    <!-- Header Finsih -->

    <!-- nav bar start -->
    <main class="root">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s" style="background-color: var(--MainColorLight);">
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="logo">
                    <img src="./src/img/logosemfundo.png" alt="">
                </div>
                <div class="navbar-nav mx-auto p-3 p-lg-0">

                    <a href="index.php" class="nav-item nav-link active text-black">Home</a>
                    <a href="./php/quemsomos.php" class="nav-item nav-link text-black">Quem Somos</a>
                    <a href="./php/contato.php" class="nav-item nav-link text-black">Contato</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggl text-blacke" data-bs-toggle="dropdown">Serviços</a>
                        <div class="dropdown-menu m-0">
                            <a href="a.php" class="dropdown-item text-black">Manuntenção</a>
                            <a href="a.php" class="dropdown-item text-black">Compras</a>
                            <a href="a.php" class="dropdown-item text-black">Passeio</a>
                        </div>
                    </div>
                    <a href="login.php" class="nav-item nav-link text-black ">Login</a>
                    <a href="cadastro.php" class="nav-item nav-link text-black ">Cadastra-se</a>

                </div>
            </div>
        </nav>

        <!-- nav bar finish -->

        <section class="hero">

            <div class="slideshow">
                <div class="slideshow-image" style="background-image: url('./src/img/old-1.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./src/img/old-3.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./src/img/old-4.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./src/img/old-5.jpg')"></div>
            </div>


            <div class="imagem-celular" style="background-color:#D3D3D3;">
                <div class="hider">
                    <img src="./src//img/logo.jpg" alt="Your Image Alt Text" class="text" />
                </div>


            </div>

        </section>

        <div class="hero-subtitle text-black text-center mt-5 mt-lg-5">

        </div>


        <!-- About Start -->
        <div class="container-xxl py-6">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="row img-twice position-relative h-100">
                            <div class="col-6">
                                <img class="img-fluid rounded" src="./src/img/old-3.jpg" alt="">
                            </div>
                            <div class="col-6 align-self-end">
                                <img class="img-fluid rounded" src="./src/img/old-4.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <h1 class="display-6 mb-2" style="color:var(--SecondaryColor)">O que somos?</h1>
                        <div class="h-100">
                            <p>A ideia de criar essa plataforma nasceu da percepção de que muitos idosos enfrentam desafios diários que podem ser amenizados com um pouco de apoio e carinho. Acreditamos que todos têm algo valioso a contribuir, e o potencial do voluntariado para criar laços e melhorar a qualidade de vida dos idosos nos inspirou a agir.</p>

                            <p>Nós atuamos como intermediários entre voluntários e idosos, facilitando o processo de encontrar a combinação perfeita entre as necessidades e habilidades. Ao se juntar à nossa comunidade, você terá a oportunidade de contribuir para o Bem-Estar, criar vínculos significativos e Compartilhar Experiências.</p>

                            <div class="row g-2 mb-4">
                                <div class="col-sm-6">
                                <i class="bi bi-list i-textos"></i> Pequenas Trocas
                                </div>
                                <div class="col-sm-6">
                                <i class="bi bi-list i-textos"></i> Passeio
                                </div>
                                <div class="col-sm-6">
                                <i class="bi bi-list i-textos"></i> Pequenos Consertos
                                </div>
                                <div class="col-sm-6">
                                <i class="bi bi-list i-textos""></i> Guias
                                </div>
                            </div>
                            <a class="btn btn-primary rounded-pill py-3 px-5" href="./php/quemsomos.php" style="background-color:var(--MainColor)">Leia Mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sobre End -->

        <div class="hero-subtitle text-black text-center mt-3 mt-lg-4">


        </div>

        <!-- Serviços Start -->
        <div class="container-xxl bg-light my-6 py-6 pt-0" style="background-color: #D3D3D3;">
            <div class="container">

                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                    <h2 class="display-6 mb-2" style="color:var(--SecondaryColor)">Nossos Serviços</h2>

                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
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
                        <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
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
                        <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
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
        <!-- Serviços End -->

        <?php
        include("./php/footer.php")
        ?>
    </main>

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top custom disable-bootstrap-styles "><i class="bi bi-arrow-up-circle-fill"></i></a>
    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript -->
    <script src="principal-js.js"></script>
</body>


</html>