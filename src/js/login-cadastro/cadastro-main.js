import { register, getCEP } from "./connect-api.js";

const form = document.getElementById("form");
const username = document.getElementById("username");
const usernick = document.getElementById("usernick");
const email = document.getElementById("email");
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const complemento = document.getElementById("complemento");
const bloco = document.getElementById("bloco");
const numeroAp = document.getElementById("Apto");
const telefone = document.getElementById("telefone");
const dataNasc = document.getElementById("dataNasc");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const disponibilidade = document.getElementById("disponibilidade");
const opcoes = document.querySelectorAll("[name=drone]");
const box_botao = document.querySelector(".box-botao");
const texto_antecedente = document.querySelector(".texto_crime");

const formSignin = document.querySelector('#signin')
const formSignup = document.querySelector('#signup')
const btnColor = document.querySelector('.btnColor')

document.querySelector('.btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('.btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})

console.log("teste")


console.log(texto_antecedente)
console.log(box_botao)

// texto_antecedente.className = "texto_crime hide";

opcoes.forEach((opcao) => {
  opcao.addEventListener("click", () => {
    if (opcao.value === "idoso") {
      box_botao.className = "box-botao hide";
      texto_antecedente.className = "texto_crime hide";
    }
    if (opcao.value === "voluntario") {
      box_botao.className = "box-botao";
      texto_antecedente.className = "texto_crime";
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicou");
  checkInputs();
  setForm();
  // window.location.href = "./login-main.js";
});

cep.addEventListener("blur", async () => {
  const valorCEP = removeSimbolos(cep.value);
  let resposta = "";
  if (valorCEP.length === 8) {
    resposta = await getCEP(valorCEP);
    // console.log(resposta);
    endereco.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
  }
});

function removeSimbolos(value) {
  let newValue = "";
  let i = 0;
  while (value[i]) {
    if (value[i] >= "0" && value[i] <= "9") newValue += value[i];
    i++;
  }
  return newValue;
}
function isNumeric(value) {
  let i = 0;
  while (value[i]) {
    if (!(value[i] >= "0" && value[i] <= "9")) return false;
    i++;
  }
  return true;
}

function checkInputs() {
  const usernameValue = username.value;
  const usernickValue = usernick.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O seu nome é obrigatório.");
  } else {
    setSuccessFor(username);
  }
  if (usernickValue === "") {
    setErrorFor(usernick, "É necessário criar um nome de usuário.");
  } else {
    setSuccessFor(usernick);
  }
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}
console.log("mudou")
async function setForm() {
  let registerType;
  opcoes.forEach((opcao) => {
    if (opcao.checked) registerType = opcao.value;
  });
  const form = {
    nome: username.value,
    usuario: usernick.value,
    senha: password.value,
    email: email.value,
    cep: cep.value,
    endereco: endereco.value,
    bairro: bairro.value,
    cidade: cidade.value,
    estado: estado.value,
    complemento: complemento.value,
    bloco: bloco.value || " ",
    numeroAp: numeroAp.value || " ",
    telefone: telefone.value,
    dataNascimento: new Date(dataNasc.value).toISOString(),
    perfil: registerType.toUpperCase(),
    disponibilidade: disponibilidade.value,
  };

  console.log(form);
  //chamando função aonde será registrado
  try {
    console.log("Registrando");
    const registro = await register(form);
    alert("Usuário registrado com sucesso");
    window.location.href = "./login-cadastro.php";
  } catch (err) {
    console.log("Erro ao registrar");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
