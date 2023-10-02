import { connectServicesV } from "./connect-api.js";

function toggleMenu() {
  const menuMobile = document.getElementById("menu-mobile");

  if (menuMobile.className === "menu-mobile-active") {
    menuMobile.className = "menu-mobile";
  } else {
    menuMobile.className = "menu-mobile-active";
  }
}

async function getCards() {
  console.log("Chegando");
  try {
    const services = await connectServicesV.getServices("vini@bol.com.br");
    console.log(services);
    console.log(`<div class="main__servicos__card">
        <div class="card__text">
            <h4>${services.nome}</h4>
            <p>Serviço de Troca de lampada</p>
        </div>
        <div class="card__button">
            <a href="#">Aceitar</a>
        </div>
    </div>`);
  } catch (error) {
    console.warn(error);
  }
}
getCards();
// connectServicesV.teste();

