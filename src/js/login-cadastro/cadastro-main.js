import { register, getCEP } from "./connect-api.js";


const formIdoso = document.querySelector('#formidoso');
const username = document.getElementById("name-i");
const usernick = document.getElementById("username-i");
const email = document.getElementById("email-i");
const cep = document.getElementById("cep-i");
const endereco = document.getElementById("rua-i");
const bairro = document.getElementById("bairro-i");
const cidade = document.getElementById("cidade-i");
const estado = document.getElementById("estado-i");
const complemento = document.getElementById("numero-i");
const bloco = document.getElementById("referencia-i");
const numeroAp = document.getElementById("complemento-i");
const telefone = document.getElementById("telefone-i");
const dataNasc = document.getElementById("dataNasc-i");
const password = document.getElementById("password-i");
const passwordConfirmation = document.getElementById("password-confirmation-i");
const disponibilidade = document.getElementById("dispo-i");
// const opcoes = document.querySelectorAll("[name=drone]-i");
const box_botao = document.querySelector(".box-botao-i");
const texto_antecedente = document.querySelector(".texto_crime-i");


// console.log(formIdoso)
// console.log(username)
// console.log(usernick)
// console.log(email)
// console.log(cep)
// console.log(endereco)
// console.log(bairro)
// console.log(cidade)
// console.log(estado)
// console.log(complemento)
// console.log(bloco)
// console.log(numeroAp)
// console.log(telefone)
// console.log(dataNasc)
// console.log(password)
// console.log(passwordConfirmation)
// console.log(disponibilidade)


const formVoluntario = document.querySelector('#formvol');
const usernameV = document.getElementById("name-v");
const usernickV = document.getElementById("username-v");
const emailV = document.getElementById("email-v");
const cepV = document.getElementById("cep-v");
const enderecoV = document.getElementById("rua-v");
const bairroV = document.getElementById("bairro-v");
const cidadeV = document.getElementById("cidade-v");
const estadoV = document.getElementById("estado-v");
const complementoV = document.getElementById("numero-v");
const blocoV = document.getElementById("referencia-v");
const numeroApV = document.getElementById("complemento-v");
const telefoneV = document.getElementById("telefone-v");
const dataNascV = document.getElementById("dataNasc-v");
const passwordV = document.getElementById("password-v");
const passwordConfirmationV = document.getElementById("password-confirmation-v");
const disponibilidadeV = document.getElementById("dispo-v");
const box_botaoV = document.querySelector(".box-botao-v");
const texto_antecedenteV = document.querySelector(".texto_crime-v");


// console.log(formVoluntario)
// console.log(usernameV)
// console.log(usernickV)
// console.log(emailV)
// console.log(cep)
// console.log(enderecoV)
// console.log(bairroV)
// console.log(cidadeV)
// console.log(estadoV)
// console.log(complementoV)
// console.log(blocoV)
// console.log(numeroApV)
// console.log(telefoneV)
// console.log(dataNascV)
// console.log(passwordV)
// console.log(passwordConfirmationV)
// console.log(disponibilidadeV)

const btnColor = document.querySelector('.btnColor')

document.querySelector('.btnSignin')
  .addEventListener('click', () => {
    formIdoso.style.left = "25px"
    formVoluntario.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('.btnSignup')
  .addEventListener('click', () => {
    formIdoso.style.left = "-450px"
    formVoluntario.style.left = "25px"
    btnColor.style.left = "110px"
})

console.log("teste")


// console.log(texto_antecedente)
// console.log(box_botao)

// texto_antecedente.className = "texto_crime hide";

// opcoes.forEach((opcao) => {
//   opcao.addEventListener("click", () => {
//     if (opcao.value === "idoso") {
//       box_botao.className = "box-botao hide";
//       texto_antecedente.className = "texto_crime hide";
//     }
//     if (opcao.value === "voluntario") {
//       box_botao.className = "box-botao";
//       texto_antecedente.className = "texto_crime";
//     }
//   });
// });

formIdoso.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicou");
  // checkInputs();
  setFormIdoso();
  // window.location.href = "./login-main.js";
});
formVoluntario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicou");
  // checkInputs();
  setFormVoluntario();
  // window.location.href = "./login-main.js";
});

// autocomplete de endereço
cep.addEventListener("blur", async () => {

  const valorCEP = removeSimbolos(cep.value);
  let resposta = "";
  if (valorCEP.length === 8) {
    resposta = await getCEP(valorCEP);
    console.log(resposta.logradouro);
    if (!resposta.logradouro) {
      alert("CEP não encontrado");
      return;
    }
    endereco.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
  }
});

cepV.addEventListener("blur", async () => {
  const valorCEP = removeSimbolos(cepV.value);
  let resposta = "";
  console.log("clicou")
  if (valorCEP.length === 8) {
    resposta = await getCEP(valorCEP);
    if (!resposta.logradouro) {
      alert("CEP não encontrado");
      return;
    }
    enderecoV.value = resposta.logradouro;
    bairroV.value = resposta.bairro;
    cidadeV.value = resposta.localidade;
    estadoV.value = resposta.uf;
  }
});

// funções auxiliares
function removeSimbolos(value) {
  let newValue = "";
  let i = 0;
  while (value[i]) {
    if (isNumeric(value[i])) newValue += value[i];
    i++;
  }
  return newValue;
}
function isNumeric(value) {
  return (value >= '0' && value <= '9');
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


async function setFormIdoso() {
  let registerType;
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
    perfil: "IDOSO",
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
    // console.log("Erro ao registrar");
    alert(err.message);
  }
}
async function setFormVoluntario() {
  let registerType;
  const form = {
    nome: usernameV.value,
    usuario: usernickV.value,
    senha: passwordV.value,
    email: emailV.value,
    cep: cepV.value,
    endereco: enderecoV.value,
    bairro: bairroV.value,
    cidade: cidadeV.value,
    estado: estadoV.value,
    complemento: complementoV.value,
    bloco: blocoV.value || " ",
    numeroAp: numeroApV.value || " ",
    telefone: telefoneV.value,
    dataNascimento: new Date(dataNascV.value).toISOString(),
    perfil: "VOLUNTARIO",
    disponibilidade: disponibilidadeV.value,
  };

  console.log(form);
  //chamando função aonde será registrado
  try {
    console.log("Registrando");
    const registro = await register(form);
    alert("Usuário registrado com sucesso");
    window.location.href = "./login-cadastro.php";
  } catch (err) {
    alert(err.message);
  }
}
console.log("mudou")

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
