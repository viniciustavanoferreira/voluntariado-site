<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="../css/redefinir-senha/alterar-style.css">
</head>

<body>
    <div class="container">
        <img src="../img/logosemfundo.png" alt="Logo" class="logo">
        <h1>Redefinir Senha</h1>
        <p>Insira sua nova senha:</p>
        <form class="form" id="form">
            <div class="form-group">
                <label for="username" class="form-label">Usuario:</label>
                <div class="input-box">
                    <input type="text" id="username" name="username" class="form-input" required>
                    <button type="button" class="visibility" value="password">
                        <!-- <span id="visibility-a" class="material-symbols-outlined">visibility_off</span> -->
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Nova senha:</label>
                <div class="input-box">
                    <input type="password" id="password" name="password" class="form-input" required>
                    <button type="button" class="visibility" value="password">
                        <!-- <span id="visibility-a" class="material-symbols-outlined">visibility_off</span> -->
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label for="password-r" class="form-label">Confirme sua senha:</label>
                <div class="input-box">
                    <input type="password" id="password-r" name="password-r" class="form-input" required>
                    <button type="button" class="visibility" value="password-r">
                        <!-- <span id="visibility-b" class="material-symbols-outlined">visibility_off</span> -->
                    </button>
                </div>
            </div>

            <div class="form-group">
                <button type="submit" class="form-button">Enviar</button>
            </div>
        </form>
    </div>
    <script src="../js/redefinir-senha/alterar-main.js"></script>
</body>

</html>
