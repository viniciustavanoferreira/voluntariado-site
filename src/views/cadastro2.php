<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="../css/cadastro/style2.css">
  <!-- <script src="https://kit.fontawesome.com/cf6fa412bd.js" crossorigin="anonymous"></script> -->

</head>
<body>

  <div class="container">
    <h2>Cadastro</h2>
    <div class="buttonsForm">
      <div class="btnColor"></div>
      <button class="btnSignin" id="btnSignin">Idoso</button>
      <button class="btnSignup" id="btnSignup">Voluntario</button>
    </div>

    <!-- idoso -->
    <form id="signin">
     
        <label for="name-i">Nome</label>
          <input type="text" id="name-i" placeholder="Digite seu nome completo" required />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
        <span class="esconder"><small>Mensagem de erro</small></span>    

      <label for="username-i">Usuário</label>
          <input type="text" id="username-i" placeholder="Digite seu nome de usuáro" required />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
        <span class="esconder"><small>Mensagem de erro</small></span>
      
        <label for="email-i">Email</label>
          <input type="text" id="email-i" placeholder="Digite seu email." />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i> 
         <span class="esconder"><small>Mensagem de erro</small></span>      
      
        <label for="telefone-i">Telefone</label>
          <input type="text" id="telefone-i" placeholder="(xx)xxxx-xxxx" /> 
          <i class="fas fa-exclamation-circle"></i> 
          <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>

      
        <label for="cep-i">CEP</label>
          <input type="text" id="cep-i" placeholder="Preencha aqui seu CEP" />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
        <span class="esconder"><small>Mensagem de erro</small></span>
   
        <label for="rua-i">Rua</label>
          <input type="text" id="rua-i" placeholder="Logradouro" />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
        <span class="esconder"><small>Mensagem de erro</small></span>
         
        <label for="numero-i">Número</label>
          <input type="text" id="numero-i" placeholder="Digite seu numero." />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>
               
        <label for="complemento-i">Complemento</label>
          <input type="text" id="complemento=i" placeholder="Ex: Apto 99, Bloco A" />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
        <span class="esconder"><small>Mensagem de erro</small></span>
        
        <label for="referencia-i">Referência</label>
          <input type="text" id="referencia-i" placeholder="Digite sua referência." />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
        <span class="esconder"><small>Mensagem de erro</small></span>
        
        <label for="bairro-i">Bairro</label>
          <input type="text" id="bairro-i" placeholder="Digite seu bairro." />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
        <span class="esconder"><small>Mensagem de erro</small></span>
         
        <label for="cidade-i">Cidade</label>
          <input type="text" id="cidade-i" placeholder="Digite seu cidade." />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>
   
        <label for="estado-i">Estado</label>
          <input type="text" id="estado-i" placeholder="Digite seu estado." />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>
         
        <label for="dataNasc-i">Data de nascimento</label>
          <input type="date" id="dataNasc-i" placeholder="Digite sua data de nascimento." />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>
           
        <div class="form-group">
        <label for="dispo-i">Disponibilidade de horários</label>
        <select class="select" for="dispo-i" id="dispo-i" name="Escolha um período" >
          <option value="periodo">Escolha um período</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>  
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>
        </div>
          
        <div class="form-group">
        <label for="condSaude-i">Condições de Saúde</label>
        <select class="select" id="condSaude-i" name="Saude">
          <option value="ok">Escolha uma opção abaixo</option>
          <option value="Boa">Boa</option>
          <option value="Regular">Regular</option>
          <option value="Ruim">Ruim</option>
        </select>  
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>
        </div>
          
        <label for="password-i">Senha</label>
        <input type="password" id="password-i" placeholder="Digite sua senha." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>
         
        <label for="password-confirmation-i">Confirmação de senha</label>
        <input type="password" id="password-confirmation-i" placeholder="Digite sua senha novamente." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
         <span class="esconder"><small>Mensagem de erro</small></span>
     
      <div class="divCheck">
        <input type="checkbox" />
        <span>Termo de responsabilidade</span>
      </div> 
      <button type="submit">Cadastrar</button>
    </form>

    <!-- Voluntario -->
    <form id="signup">
      <label for="name-v">Nome</label>
        <input type="text" id="name-v" placeholder="Digite seu nome completo" required />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
          <span class="esconder"><small>Mensagem de erro</small></span>
 
      <label for="username-v">Usuário</label>
        <input type="text" id="username-v" placeholder="Digite seu nome de usuáro" required />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
      <span class="esconder"><small>Mensagem de erro</small></span>

      <label for="email-v">Email</label>
        <input type="text" id="email-v" placeholder="Digite seu email." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i> 
      <span class="esconder"><small>Mensagem de erro</small></span>
 
      <label for="telefone-v">Telefone</label>
        <input type="text" id="telefone-v" placeholder="(xx)xxxx-xxxx" /> 
        <i class="fas fa-exclamation-circle"></i> 
        <i class="fas fa-check-circle"></i>
      <span class="esconder"><small>Mensagem de erro</small></span>
   
      <label for="cep-v">CEP</label>
        <input type="text" id="cep-v" placeholder="Preencha aqui seu CEP" />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
      <span class="esconder"><small>Mensagem de erro</small></span>
   
      <label for="rua-v">Rua</label>
        <input type="text" id="rua-v" placeholder="Logradouro" />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
      <span class="esconder"><small>Mensagem de erro</small></span>
 
      <label for="numero-v">Número</label>
        <input type="text" id="numero-v" placeholder="Digite seu numero." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
      <span class="esconder"><small>Mensagem de erro</small></span>
 
      <label for="complemento-v">Complemento</label>
        <input type="text" id="complemento-v" placeholder="Ex: Apto 99, Bloco A" />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
      <span class="esconder"><small>Mensagem de erro</small></span>
    
      <label for="referencia-v">Referência</label>
        <input type="text" id="referencia-v" placeholder="Digite sua referência." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
      <span class="esconder"><small>Mensagem de erro</small></span>
    
      <label for="bairro-v">Bairro</label>
        <input type="text" id="bairro-v" placeholder="Digite seu bairro." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
      <span class="esconder"><small>Mensagem de erro</small></span>
    
      <label for="cidade-v">Cidade</label>
        <input type="text" id="cidade-v" placeholder="Digite seu cidade." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
       <span class="esconder"><small>Mensagem de erro</small></span>
 
      <label for="estado-v">Estado</label>
        <input type="text" id="estado-v" placeholder="Digite seu estado." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
       <span class="esconder"><small>Mensagem de erro</small></span>
    
      <label for="dataNasc-v">Data de nascimento</label>
        <input type="date" id="dataNasc-v" placeholder="Digite sua data de nascimento." />
        <i class="fas fa-exclamation-circle"></i>
        <i class="fas fa-check-circle"></i>
       <span class="esconder"><small>Mensagem de erro</small></span>
 
    
    <label for="habilidade-v">Habilidades</label>
      <input type="text" id="habilidade-v" placeholder="Digite suas habilidades." />
      <i class="fas fa-exclamation-circle"></i>
      <i class="fas fa-check-circle"></i>
     <span class="esconder"><small>Mensagem de erro</small></span>

     <label for="texto_crime">Atestado de Antecedentes Criminais</label>
     <div action="envia_foto.php" method="post" enctype="multipart/form-data"></div>
     
    <div class="box-botao">
      <input class="botao" type="file" name="Arquivo" id="Arquivo" />
          <input class="botao botao_apagar" type="reset" value="Apagar" />
          <div class="form-control">
            <input class="botao botao_enviar" type="submit" value="Enviar" />
          </div>

    </div>
    
      <div class="divCheck">
        <input type="checkbox" required />
        <span>Termo de responsabilidade</span>
      </div>

      <button type="submit">Cadastrar</button>
      
    </form>
  </div>

  <script type="module" src="../js/login-cadastro/cadastro-main.js"></script>
</body>
</html>