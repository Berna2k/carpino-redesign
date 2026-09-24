import './style.scss';
import { categoriasSabores } from './data/sabores.js';

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

// La carta se crea a partir de src/data/sabores.js.
const filtrosSabores = document.querySelector('#filtros-sabores');
const listaSabores = document.querySelector('#lista-sabores');
const resumenSabores = document.querySelector('#resumen-sabores');
const buscarSabor = document.querySelector('#buscar-sabor');
let categoriaActiva = 'todos';

function normalizar(texto) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es');
}

function mostrarSabores() {
  const consulta = normalizar(buscarSabor.value.trim());
  const grupos = categoriasSabores
    .filter(({ id }) => categoriaActiva === 'todos' || id === categoriaActiva)
    .map(({ id, nombre, sabores }) => ({
      id,
      nombre,
      sabores: sabores.filter((sabor) => normalizar(sabor).includes(consulta)),
    }))
    .filter(({ sabores }) => sabores.length > 0);

  const cantidad = grupos.reduce((total, grupo) => total + grupo.sabores.length, 0);
  listaSabores.replaceChildren();

  if (cantidad === 0) {
    const mensaje = document.createElement('p');
    mensaje.className = 'sabores__vacio';
    mensaje.textContent = 'No encontramos sabores. Probá otra palabra o categoría.';
    listaSabores.append(mensaje);
  }

  grupos.forEach(({ id, nombre, sabores }) => {
    const grupo = document.createElement('section');
    grupo.className = 'sabores__grupo';
    grupo.setAttribute('aria-labelledby', `sabores-${id}`);

    const titulo = document.createElement('h3');
    titulo.id = `sabores-${id}`;
    titulo.textContent = nombre;

    const contador = document.createElement('span');
    contador.className = 'sabores__grupo-cantidad';
    contador.textContent = String(sabores.length);
    contador.setAttribute('aria-label', `${sabores.length} sabores`);
    titulo.append(contador);

    const lista = document.createElement('ul');
    lista.className = 'sabores__items';

    sabores.forEach((sabor) => {
      const item = document.createElement('li');
      item.textContent = sabor;
      lista.append(item);
    });

    grupo.append(titulo, lista);
    listaSabores.append(grupo);
  });

  const vistaCompleta = categoriaActiva === 'todos' && consulta === '';
  resumenSabores.textContent = vistaCompleta
    ? `${cantidad} sabores en ${categoriasSabores.length} categorías.`
    : `${cantidad} ${cantidad === 1 ? 'sabor encontrado' : 'sabores encontrados'}.`;
}

// Los filtros también se crean desde los datos, así funcionan si cambia una categoría.
const opcionesFiltro = [
  { id: 'todos', nombre: 'Todos' },
  ...categoriasSabores.map(({ id, nombre }) => ({ id, nombre })),
];

opcionesFiltro.forEach(({ id, nombre }) => {
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.textContent = nombre;
  boton.setAttribute('aria-pressed', String(id === categoriaActiva));

  boton.addEventListener('click', () => {
    categoriaActiva = id;
    filtrosSabores.querySelectorAll('button').forEach((opcion, indice) => {
      opcion.setAttribute('aria-pressed', String(opcionesFiltro[indice].id === id));
    });
    mostrarSabores();
  });

  filtrosSabores.append(boton);
});

buscarSabor.addEventListener('input', mostrarSabores);
mostrarSabores();
