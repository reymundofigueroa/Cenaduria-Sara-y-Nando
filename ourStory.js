// Variables y Selección de Elementos
const hamButton = document.getElementById("ham-btn");
const linkBeginnings = document.getElementById("link-beginnings");
const linkAmazingPlaces = document.getElementById("link-amazing-places");
const linkMenu = document.getElementById("link-menu");
const linkAboutUs = document.getElementById("link-about-us");
const linkRates = document.getElementById("link-rates");
const linkDirection = document.getElementById("link-direction");
const linkDelivery = document.getElementById("link-delivery");

// Funciones Principales
function toggleDropDownMenu() {
  const header = document.querySelector("header");
  const dropDownMenu = document.getElementById("drop-down-menu");
  dropDownMenu.classList.toggle("inactive");

  if (dropDownMenu.classList.contains("inactive")) {
    header.style.zIndex = "0";
  } else {
    header.style.zIndex = "1100";
  }
}

function closeDropDownMenuByOutClick(event) {
  const dropDownMenu = document.getElementById("drop-down-menu");
  const hamButton = document.getElementById("ham-btn");
  const header = document.querySelector("header");
  if (
    !dropDownMenu.contains(event.target) &&
    !hamButton.contains(event.target)
  ) {
    dropDownMenu.classList.add("inactive");
    header.style.zIndex = "1";
  }
}

// Inicialización y Eventos
hamButton.addEventListener("click", toggleDropDownMenu);
linkBeginnings.addEventListener("click", toggleDropDownMenu);
linkAmazingPlaces.addEventListener("click", toggleDropDownMenu);
linkMenu.addEventListener("click", toggleDropDownMenu);
linkAboutUs.addEventListener("click", toggleDropDownMenu);
linkRates.addEventListener("click", toggleDropDownMenu);
linkDirection.addEventListener("click", toggleDropDownMenu);
linkDelivery.addEventListener("click", toggleDropDownMenu);
document.addEventListener("click", closeDropDownMenuByOutClick);
