import { connectionLoginRegister } from "./connect-api.js";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const bairro = document.getElementById("bairro");
const complemento = document.getElementById("complemento");
const telefone = document.getElementById("telefone");
const dataNasc = document.getElementById("dataNasc");
const passwordConfirmation = document.getElementById("password-confirmation");
const opcoes = document.querySelectorAll("[name=drone]");
const box_botao = document.querySelector(".box-botao");
const texto_antecedente = document.querySelector(".texto_crime");

opcoes.forEach((opcao) => {
  opcao.addEventListener("click", () => {
    if (opcao.value === "idoso") {
      box_botao.className = "box-botao hide";
      texto_antecedente.className = ".texto_crime hide";
    }
    if (opcao.value === "voluntario") {
      box_botao.className = "box-botao";
      texto_antecedente.className = ".texto_crime";
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  setForm();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
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

function setForm() {
  let registerType;
  opcoes.forEach((opcao) => {
    if (opcao.checked) registerType = opcao.value;
  });
  const form = {
    nome: username.value,
    dataNascimento: dataNasc.value,
    email: email.value,
    telefone: telefone.value,
    cep: cep.value,
    endereco: `${endereco.value} ${bairro.value} ${complemento.value}`,
    usuario: "teste",
    // bairro: bairro.value,
    // complemento: complemento.value,
    senha: password.value,
    perfil: registerType,
  };

  // console.log(form);
  connectionLoginRegister.register(form);
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
