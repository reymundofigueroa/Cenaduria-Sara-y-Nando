// Variables y Selección de Elementos
const header = document.querySelector("header");
const dropDownMenu = document.getElementById("drop-down-menu");
const mobileNav = document.getElementById("mobile-nav");
const hamButton = document.getElementById("ham-btn");
const linkInicio = document.getElementById("link-inicio");
const linkMenu = document.getElementById("link-menu");
const linkAboutUs = document.getElementById("link-about-us");
const linkRates = document.getElementById("link-rates");
const linkDirection = document.getElementById("link-direction");
const linkDelivery = document.getElementById("link-delivery");

// Funciones Principales

function toggleDropDownMenu() {
  dropDownMenu.classList.toggle("inactive");
  mobileNav.classList.toggle("inactive");
  if (dropDownMenu.classList.contains("inactive")) {
    header.style.zIndex = "0";
  } else {
    header.style.zIndex = "1100";
  }
}

function closeDropDownMenuByOutClick(event) {
  if (
    !dropDownMenu.contains(event.target) &&
    !hamButton.contains(event.target)
  ) {
    dropDownMenu.classList.add("inactive");
    mobileNav.classList.add("inactive");
    header.style.zIndex = "0";
  }
}

// Inicialización y Eventos

hamButton.addEventListener("click", toggleDropDownMenu);
document.addEventListener("click", closeDropDownMenuByOutClick);
linkInicio.addEventListener("click", toggleDropDownMenu);
linkMenu.addEventListener("click", toggleDropDownMenu);
linkAboutUs.addEventListener("click", toggleDropDownMenu);
linkRates.addEventListener("click", toggleDropDownMenu);
linkDirection.addEventListener("click", toggleDropDownMenu);
linkDelivery.addEventListener("click", toggleDropDownMenu);