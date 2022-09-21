let movingMenu = -50;
const menuHidden = document.querySelector('.menu-hidden');
const menu = document.querySelector('.menu');
const btnClose = document.querySelector('.btn-close');

menu.onclick = function () {
  movingMenu += 50;
  menuHidden.style.right = movingMenu + '%'; 
}

btnClose.onclick = function () {
  movingMenu -= 50;
  menuHidden.style.right = movingMenu + '%';
}
 