let moving = 0;
let slider = document.querySelector('.slider');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

leftArrow.onclick = function () {
  moving += 400;
  slider.style.left = moving + 'px';
  if (moving > 0) {
    moving = -400;
  }
}

rightArrow.onclick = function () {
  moving -= 400;
  slider.style.left = moving + 'px';
  if (moving < -2000) {
    moving = -400;
  }
}