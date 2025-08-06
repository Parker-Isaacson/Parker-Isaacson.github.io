const btn  = document.getElementById('hamburger-btn');
const menu = document.getElementById('side-menu');

btn.addEventListener('click', () => {
  const isOpen = btn.classList.toggle('open');
  menu.classList.toggle('open');

  // for accessibility
  btn.setAttribute('aria-expanded', isOpen);
  menu.setAttribute('aria-hidden', !isOpen);
});