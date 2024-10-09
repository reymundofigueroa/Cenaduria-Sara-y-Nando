// Variables y Selección de Elementos
const menuContainer = document.getElementById('cards-menu-container');
const fragment = document.createDocumentFragment();
const hamButton = document.getElementById('ham-btn');

// Funciones Utilitarias
function createElementWithClass(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

// Funciones Principales
function createMenuCard(menuItem) {
  const { name, flavors, price, img } = menuItem;

  const cardContainer = createElementWithClass('div', 'card');
  const leftSide = createElementWithClass('div', 'card-left-side');
  const rightSide = createElementWithClass('div', 'card-right-side');

  const nameParagraph = document.createElement('p');
  nameParagraph.textContent = name;

  const flavorsList = document.createElement('ul');
  if (flavors) {
    flavors.forEach(flavor => {
      const flavorItem = document.createElement('li');
      flavorItem.textContent = flavor;
      flavorsList.appendChild(flavorItem);
    });
  }

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `MXN $${price[0]}.00`;

  leftSide.appendChild(nameParagraph);
  leftSide.appendChild(flavorsList);
  leftSide.appendChild(priceSpan);

  const image = document.createElement('img');
  image.src = img;
  image.alt = `imagen de ${name}`;

  rightSide.appendChild(image);

  cardContainer.appendChild(leftSide);
  cardContainer.appendChild(rightSide);

  return cardContainer;
}

function toggleDropDownMenu() {
  const header = document.querySelector('header');
  const dropDownMenu = document.getElementById('drop-down-menu');
  dropDownMenu.classList.toggle('inactive');

  if (dropDownMenu.classList.contains('inactive')) {
    header.style.zIndex = '1';
  } else {
    header.style.zIndex = '1100';
  }
}

function closeDropDownMenuByOutClick(event) {
  const dropDownMenu = document.getElementById('drop-down-menu');
  const hamButton = document.getElementById('ham-btn');
  const header = document.querySelector('header');
  if (!dropDownMenu.contains(event.target) && !hamButton.contains(event.target)) {
    dropDownMenu.classList.add('inactive');
    header.style.zIndex = '1';
  }
}

// Inicialización y Eventos
menu.forEach(item => {
  const card = createMenuCard(item);
  fragment.appendChild(card);
});
menuContainer.appendChild(fragment);

hamButton.addEventListener('click', toggleDropDownMenu);
document.addEventListener('click', closeDropDownMenuByOutClick);
