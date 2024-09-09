function createMenuCard(menuItem) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const leftSide = document.createElement('div');
  leftSide.classList.add('card-left-side');

  const nameParagraph = document.createElement('p');
  nameParagraph.textContent = menuItem.name;

  const flavorsList = document.createElement('ul');
  
  if (menuItem.flavors) {
    menuItem.flavors.forEach(flavor => {
      const flavorItem = document.createElement('li');
      flavorItem.textContent = flavor;
      flavorsList.appendChild(flavorItem);
    });
  } 

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `MXN $${menuItem.price[0]}.00`;

  leftSide.appendChild(nameParagraph);
  leftSide.appendChild(flavorsList);
  leftSide.appendChild(priceSpan);

  const rightSide = document.createElement('div');
  rightSide.classList.add('card-right-side');

  const image = document.createElement('img');
  image.src = menuItem.img;
  image.alt = `imagen de ${menuItem.name}`;

  rightSide.appendChild(image);

  cardContainer.appendChild(leftSide);
  cardContainer.appendChild(rightSide);

  return cardContainer;
}

const menuContainer = document.getElementById('cards-menu-container'); // Asegúrate de tener un elemento con el ID 'menu-container' en tu HTML
menu.forEach(item => {
  const card = createMenuCard(item);
  menuContainer.appendChild(card);
});
