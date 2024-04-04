const headerMobile = document.querySelector('#mobile');
const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', function () {
  headerMobile.classList.toggle('open');
});
