document.getElementById('year').textContent = new Date().getFullYear();
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? 'Cerrar' : 'Menú';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menú';
}));
