import {resetPassword} from "./connect-api.js";

const userName = document.querySelector("[name=username]");
const password = document.querySelector("[name=password]");
const newPassword = document.querySelector("[name=password-r]");
const buttonViewPassword = document.querySelectorAll(".visibility");
const iconA = document.querySelector("#visibility-a");
const iconB = document.querySelector("#visibility-b");

// console.log(buttonViewPassword);
// console.log(password);
// console.log(newPassword);

function resetPassword()
{
    const idUsuario = userName.value;
    const senha = password.value;
    const novaSenha = newPassword.value;
    console.log(idUsuario);
    console.log(senha);
    console.log(novaSenha);
    if (senha !== novaSenha) {
        alert("As senhas não coincidem");
        return;
    }
    const response = resetPassword(idUsuario, novaSenha);
    console.log(response);
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
