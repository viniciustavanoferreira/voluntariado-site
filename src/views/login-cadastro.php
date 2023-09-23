<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="../css/login-cadastro/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="content first-content">
            <div class="first-column">
                <h2 class="title title-primary">Seja bem-vindo <br> Bom Vizinho</h2>
                <p class="description description-primary">.......</p>
                <p class="description description-primary">É novo aqui?</p>
                <button id="signin" class="btn btn-primary">Cadastrar</button>
            </div>
            <div class="second-column">
                <h2 class="title title-second">Acesse aqui</h2>

                <p class="description description-second">Faça login da sua conta</p>
                <form class="form">

                    <label class="label-input" for="">
                        <i class="far fa-envelope icon-modify"></i>
                        <input name="txEmail" type="email" placeholder="Email">
                    </label>

                    <label class="label-input" for="">
                        <i class="fas fa-lock icon-modify"></i>
                        <input name="txPassword" type="password" placeholder="Password">
                    </label>


                    <button id="signup" class="btn btn-second">Entrar</button>
                    <a id="forgot-password-link" class="password" href="#">Esqueceu sua senha?</a>
                </form>
            </div><!-- second column -->
        </div><!-- first content -->

    </div>
    <script type="module" src="../js/login-cadastro/login-main.js"></script>
</body>

</html>
