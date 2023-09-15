function toggleMenu(){
    const menuMobile = document.getElementById("menu-mobile")

    if(menuMobile.className === "menu-mobile-active"){
        menuMobile.className = "menu-mobile"
    }else{
        menuMobile.className = "menu-mobile-active"
    }
}

function getServices() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://sistema-voluntariado-backend.onrender.com/v1/api/idoso/servico/vini@bol.com.br", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}