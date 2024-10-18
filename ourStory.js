const hamButton = document.getElementById('ham-btn');

function toggleDropDownMenu() {
  const header = document.querySelector('header');
  const dropDownMenu = document.getElementById('drop-down-menu');
  dropDownMenu.classList.toggle('inactive');

  if (dropDownMenu.classList.contains('inactive')) {
    header.style.zIndex = '0';
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


hamButton.addEventListener('click', toggleDropDownMenu);
document.addEventListener('click', closeDropDownMenuByOutClick);
