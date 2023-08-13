<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bom Vizinho</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="index-css.css" />
    

</head>

<header class="p-3 text-bg-transparent">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       <!-- <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>

          para usar um logo no lugar
        </a> -->

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-4 text-black">Home</a></li>
          <li><a href="#" class="nav-link px-4 text-black">Contato</a></li>
          <li><a href="#" class="nav-link px-4 text-black">Serviços</a></li>
        </ul>

        <div class="custom-buttons">
    <button type="button" class="btn btn-outline-dark me-2 custom-login-button">Login</button>
    <button type="button" class="btn btn-outline-dark me-2 custom-signup-button">Cadastra-se</button>
</div>
        </div>
      </div>
    </div>
  </header>
<body>
<!-- <header class="header fixed-top bigger px-5">
        <div class="audote-container">
            <div class="header-container">
                <div class="logo-nav-container">
                    <div class="logo light">
                        <a href="#">Bom Vizinho</a>
                    </div>
                    <div class="nav-trigger navbar light">
                        <a role="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav"
                            aria-controls="mobileNav">
                            <div class="line-1"></div>
                            <div class="line-2"></div>
                            <div class="line-3"></div>
                        </a>
                        <div class="offcanvas offcanvas-start nav-mobile-container" tabindex="-1" id="mobileNav">
                            <div class="offcanvas-header">
                                <div class="logo">
                                    <a href="index.html"><span style="color: var(--MainColor)">Bom Vizinho</span></a>
                                </div>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <nav class="nav-mobile">
                                    <ul class="navbar-nav justify-content-end flex-grow-1">
                                        <li class="nav-item">
                                            
                                        </li>
                                        <li class="nav-item">
                                            <a role="button" class="nav-link" href="#">Voluntario?</a>
                                        </li>
                                        <li class="nav-item">
                                            <a role="button" class="nav-link" href="#">Idoso?</a>
                                        </li>
                                        <li class="nav-item">
                                            <a role="button" class="nav-link" href="#">Parcerias</a>
                                        </li>
                                        <li class="nav-item">
                                            <a role="button" class="nav-link" href="#">Quem somos</a>
                                        </li>
                                        <li class="nav-item">
                        
                                        </li>
                                        <li class="nav-item">
                                            <a role="button" class="nav-link" href="logout.php">Sair</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
    </header>
-->
    
    <section class="hero hero-bg cover" style="background-color: #FFFF">
        <div class="hero-opacity"></div>
        <div class="hero-caption">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-9 col-xxl-8">
                        <h1 class="text-white text-center">
                            <span style="color: var(--MainColor)">Bom Vizinho</span>
                        </h1>
                    </div>
                    <div class="hero-subtitle text-black text-center mt-3 mt-lg-4">
                            A ajuda está ao seu
                            <strong>lado.</strong>
                        </div>
                </div>
            </div>

            <div class="mt-3 mt-lg-4 text-center">
                            <a href="login.php" class="btn rounded-pill section-cta">Sobre</a>
                        </div>
        </div>
    </section>
    <?php
    include("./php/footer.php")
    ?>
</body>

</html>