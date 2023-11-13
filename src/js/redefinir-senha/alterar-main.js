import {resetPassword} from "./connect-api.js";

const userName = document.querySelector("[name=username]");
const password = document.querySelector("[name=password]");
const newPassword = document.querySelector("[name=password-r]");
const buttonViewPassword = document.querySelectorAll(".visibility");
const iconA = document.querySelector("#visibility-a");
const iconB = document.querySelector("#visibility-b");
const form = document.querySelector("form");

form.addEventListener("submit", updatePassword);

async function updatePassword(event)
{
    event.preventDefault();
    const idUsuario = userName.value;
    const senha = password.value;
    const novaSenha = newPassword.value;

    if (senha !== novaSenha) {
        alert("As senhas não coincidem");
        return;
    }
    if (newPassword === "") {
        alert("A senha nova não pode ser vazia");
        return;
    }
    try {
        const response = await resetPassword(idUsuario, novaSenha);
        console.log(response);
        alert(response.message);
    } catch (error) {
        alert(error.message);
    }
}


// buttonViewPassword.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     if (button.value === "password" && iconA.textContent === "visibility_off") {
//       iconA.textContent = "visibility";
//       password.type = "text";
//       console.log(password.type);
//     }
//     if (button.value === "password" && iconA.textContent === "visibility") {
//       iconA.textContent = "visibility_off";
//       password.type = "password";
//     }
//     // if (button.value === "password-r" && iconB.textContent === "visibility_off") {
//     //   iconB.textContent = "visibility";
//     //   newPassword.type = "text";
//     // }
//     // if (button.value === "password-r" && iconB.textContent === "visibility") {
//     //     iconB.textContent = "visibility_off";
//     //     newPassword.type = "password";
//     //   }
//   });
// });
