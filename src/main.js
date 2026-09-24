import './style.scss';

// Abre y cierra la navegación en pantallas pequeñas.
const encabezado = document.querySelector('.encabezado');
const botonMenu = document.querySelector('.boton-menu');
const navegacion = document.querySelector('#navegacion-principal');

function establecerMenuAbierto(estaAbierto) {
  encabezado.classList.toggle('menu-abierto', estaAbierto);
  botonMenu.setAttribute('aria-expanded', String(estaAbierto));
}

botonMenu.addEventListener('click', () => {
  const estaAbierto = botonMenu.getAttribute('aria-expanded') === 'true';
  establecerMenuAbierto(!estaAbierto);
});

// Cierra el menú después de elegir una sección.
navegacion.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => establecerMenuAbierto(false));
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') establecerMenuAbierto(false);
});