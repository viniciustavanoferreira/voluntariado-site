import { connectServicesV } from "./connect-api.js";

const cardsContainer = document.querySelector(".main__servicos");
console.log(cardsContainer);

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
    cardsContainer.innerHTML += `<div class="main__servicos__card">
    <div class="card__text">
        <h4>${services.nome}</h4>
        <p>Serviço de Bate papo</p>
    </div>
    <div class="card__button">
        <a href="#">Aceitar</a>
    </div>
    <div class="card__button">
        <a href="#">Rejeitar</a>
    </div>
</div>`;
  } catch (error) {
    console.warn(error);
  }
}
getCards();
// connectServicesV.teste();
