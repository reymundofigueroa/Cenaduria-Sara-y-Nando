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

function createElementWithClass(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

const menuContainer = document.getElementById('cards-menu-container');
const fragment = document.createDocumentFragment();
menu.forEach(item => {
  const card = createMenuCard(item);
  fragment.appendChild(card);
});
menuContainer.appendChild(fragment);

function toggleDropDownMenu() {
  const dropDownMenu = document.getElementById('drop-down-menu');
  dropDownMenu.classList.toggle('none-visibility');
}

const hamButton = document.getElementById('ham-btn');
hamButton.addEventListener('click', toggleDropDownMenu);
