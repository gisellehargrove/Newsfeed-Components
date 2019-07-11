
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence.
//   if(menu.classList.length === 1) {
//     menu.classList.add('menu--open');
//   } else {
//     menu.classList.remove('menu--open');
//   }
// }
//
// // Start Here: Create a reference to the ".menu" class
// const menu = document.getElementsByClassName('menu')[0];
// // create a reference to the ".menu-button" class
// const menuButton = document.getElementsByClassName('menu-button')[0];
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', toggleMenu);





/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  Pass the function an array as it's only argument.
  Step 2: Iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button currently on the DOM.

  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.

*/

const menuCreator = (arr) => {
  // select the menu-button currently on the DOM
  const menuButton = document.querySelector('.menu-button');

  // create menu parent div
  const menu = document.createElement('div');
  // attach menu class to element
  menu.classList.add('menu');

  // create ul for menu items
  const ul = document.createElement('ul');
  // append ul to menu
  menu.appendChild(ul);



  // iterate over the arr
  arr.forEach((element) => {
    // create a new li for each element and set the text to it value
    const menuItem = document.createElement('li')
    // set text content
    menuItem.textContent = element;
    // append the menu Item to the ul
    ul.appendChild(menuItem);
  });

  // add an event listener to the menu button
  menuButton.addEventListener('click', () => {
    console.log('yo')
    menu.classList.toggle('menu--open');
  });

  // attach menu to the DOM
  const articlesElement = document.querySelector('.articles');
  const parentElement = articlesElement.parentNode;
  // insert the menu before the articles container
  parentElement.insertBefore(menu, articlesElement);

  // return menu component
  return menu;
}

menuCreator(menuItems);
