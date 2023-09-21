<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="../css/cadastro/style.css" />

  <title>Formulário</title>
</head>

<body>
  <div class="container">
    <div class="header">
      <h2>Cadastro</h2>
    </div>

    <!-- <form>
        <INPUT TYPE="RADIO" NAME="OPCAO" VALUE="op1"> Idoso
        <INPUT TYPE="RADIO" NAME="OPCAO" VALUE="op2"> Voluntário
      </form> -->

    <div class="form-opcao">
      <div>
        <input type="radio" id="huey" name="drone" value="idoso" checked />
        <label for="huey">Idoso</label>
      </div>

      <div>
        <input type="radio" id="huey" name="drone" value="voluntario" />
        <label for="huey">Voluntário</label>
      </div>

    </div>

    <form id="form" class="form">
      <div class="form-control">
        <label for="username">Nome</label>
        <input type="text" id="username" placeholder="Digite seu nome completo." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>
      <div class="form-control">
        <label for="usernick">Nome de usuário</label>
        <input type="text" id="usernick" placeholder="Digite um nome de usuário" />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Digite seu email." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>

      <div class="form-control">
        <label for="cep">CEP</label>
        <input type="text" id="cep" placeholder="Preencha aqui seu CEP" />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>
      <div class="form-control">
        <label for="endereco">Endereço</label>
        <input type="text" id="endereco" placeholder="Ex: Rua, Avenida" />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>

      <div class="form-control">
        <label for="bairro">Bairro</label>
        <input type="text" id="bairro" placeholder="Digite seu bairro." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>

      <div class="form-control">
        <label for="complemento">Complemento</label>
        <input type="text" id="complemento" placeholder="Ex: Apto 99, Bloco A" />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>


      <div class="form-control">
        <label for="telefone">Telefone</label>
        <input type="tel" id="telefone" placeholder="xx-9xxxx-xxxx" />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>

      <div class="form-control">
        <label for="data">Data de nascimento</label>
        <input type="date" id="dataNasc" placeholder="Digite sua data de nascimento." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>

      <div class="form-control">
        <label for="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>

      <div class="form-control">
        <label for="password-confirmation">Confirmação de senha</label>
        <input type="password" id="password-confirmation" placeholder="Digite sua senha novamente." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
        <small>Mensagem de erro</small>
      </div>

      <!-- Botão de anexar docuemnto antecedentes crimainiais -->
      <!-- O valor 4194304 é igual a um arquivo de até 4MB -->

      <label class="texto_crime"> Atestado de Antecedentes Criminais</label> <br>
      <div action="envia_foto.php" method="post" enctype="multipart/form-data">
        <div class="box-botao">
          <input class="botao" type="file" name="Arquivo" id="Arquivo" />
          <input class="botao botao_apagar" type="reset" value="Apagar" />
        </div>
      </div>
      <div class="form-control">
        <input class="botao botao_enviar" type="submit" value="Enviar" />
      </div>
    </form>
    <script src="https://kit.fontawesome.com/f9e19193d6.js" crossorigin="anonymous"></script>

    <script type="module" src="../js/login-cadastro/cadastro-main.js"></script>
</body>

</html>
