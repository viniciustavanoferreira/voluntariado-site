<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Bom Vizinho</title>
    <link rel="icon" type="image/png" href="../src/img/logosemfundo.png">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap" rel="stylesheet" />
    <!-- Customized CSS -->

    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css" />

    <!-- Principal CSS -->

    <link rel="stylesheet" href="../pgprincipal.css" />

    <!-- Libraries Stylesheet -->
    <link href="../lib/animate/animate.min.css" rel="stylesheet">
    <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

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
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="logo">
                    <img src="../src/img/logosemfundo.png" alt="">
                </div>
                <div class="navbar-nav mx-auto p-3 p-lg-0">

                    <a href="../index.php" class="nav-item nav-link active text-black">Home</a>
                    <a href="quemsomos.php" class="nav-item nav-link text-black">Quem Somos</a>
                    <a href="contato.php" class="nav-item nav-link text-black">Contato</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggl text-blacke" data-bs-toggle="dropdown">Serviços</a>
                        <a href="../index.php#lampadas" class="dropdown-item text-black">Manutenção</a>
        <a href="../index.php#passeios" class="dropdown-item text-black">Passeio</a>
        <a href="../index.php#servicos" class="dropdown-item text-black">Outros</a>
                        </div>
                    </div>
                    <a href="../src/views/login-cadastro.php" class="nav-item nav-link text-black ">Login</a>
                    <a href="../src/views/cadastro.php" class="nav-item nav-link text-black ">Cadastra-se</a>

                </div>
            </div>
        </nav>

        <!-- nav bar finish -->

        <section class="hero">

            <div class="slideshow">
                <div class="slideshow-image" style="background-image: url('../src/img/old-1.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('../src/img/old-3.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('../src/img/old-4.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('../src/img/old-5.jpg')"></div>
            </div>


            <div class="imagem-celular" style="background-color:#D3D3D3;">
                <div class="hider">
                    <img src="./src//img/logo.jpg" alt="Your Image Alt Text" class="text" />
                </div>


            </div>

        </section>

        <div class="hero-subtitle text-black text-center mt-5 mt-lg-5">

        </div>


        

        <?php
        include("footer.php")
        ?>
    </main>

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top custom disable-bootstrap-styles "><i class="bi bi-arrow-up-circle-fill"></i></a>
    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../lib/wow/wow.min.js"></script>
    <script src="../lib/easing/easing.min.js"></script>
    <script src="../lib/waypoints/waypoints.min.js"></script>
    <script src="../lib/counterup/counterup.min.js"></script>
    <script src="../lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript -->
    <script src="../principal-js.js"></script>
</body>


</html>