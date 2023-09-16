
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


var requestOptions = {
  method: 'POST',
  redirect: 'follow'
};

function login() {
   var requestOptions = {
     method: 'POST',
     redirect: 'follow'
   };

   fetch("https://sistema-voluntariado-backend.onrender.com/v1/api/login/email/teste@gmail.com/password/@ahuo123HakDk", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));
}
