
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if(menu.classList.length === 1) {
    menu.classList.add('menu--open');
  } else {
    menu.classList.remove('menu--open');
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName('menu')[0];
// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName('menu-button')[0];
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
