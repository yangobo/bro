

const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {

  let scroll = window.scrollY;

  heroContent.style.transform =
  `translate(-50%, calc(-50% - ${scroll * 0.3}px))`;

});