import './sass/main.scss';
import icon from './img/menuIcon.svg';
import editIcon from './img/editIcon.svg';

// DOM Elements
const navbarIcon = document.querySelector('.icon-container img');
const sideBar = document.querySelector('.sidebar');
const main = document.querySelector('main'); 

const todos = document.querySelectorAll('.tip-to-delete');
todos.forEach(todo => todo.src = editIcon);

navbarIcon.src = icon;

navbarIcon.addEventListener('click', () => {
  sideBar.classList.toggle('active');
  main.classList.toggle('side-active');
});
