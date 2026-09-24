import './style.scss'

// Conecta los botones con las tarjetas de la sección Sabores.
const botonesFiltro = document.querySelectorAll('[data-filtro]');
const tarjetasSabor = document.querySelectorAll('#sabores [data-categoria]');

botonesFiltro.forEach((boton) => {
  boton.addEventListener('click', () => {
    const categoriaElegida = boton.dataset.filtro;

    tarjetasSabor.forEach((tarjeta) => {
      const coincide =
        categoriaElegida === 'todos' ||
        tarjeta.dataset.categoria === categoriaElegida;

      tarjeta.hidden = !coincide;
    });

    botonesFiltro.forEach((otroBoton) => {
      const estaSeleccionado = otroBoton === boton;
      otroBoton.setAttribute('aria-pressed', String(estaSeleccionado));
    });
  });
});

// Controla la apertura y el cierre del menú para pantallas pequeñas.
const encabezado = document.querySelector('header');
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

navegacion.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    establecerMenuAbierto(false);
  });
});

// Muestra una respuesta local; todavía no envía los datos.
const formularioContacto = document.querySelector('#formulario-contacto');
const estadoFormulario = document.querySelector('#estado-formulario');

formularioContacto.addEventListener('submit', (evento) => {
  evento.preventDefault();
  estadoFormulario.textContent =
    'El formulario se completó correctamente. Para enviar mensajes reales, habrá que conectarlo a un servicio.';
});