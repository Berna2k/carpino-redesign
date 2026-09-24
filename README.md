# Heladería Carpino

Sitio web de Heladería Carpino, una heladería artesanal de Morón, Buenos Aires, con tradición desde 1986. El proyecto presenta la marca, la carta de sabores y las formas de visitar el local o hacer un pedido.

## Qué incluye

- Carta de sabores con búsqueda y filtros por categoría. La cantidad de sabores se calcula automáticamente a partir de los datos.
- Diseño adaptable a computadoras y celulares, con menú desplegable en pantallas pequeñas.
- Información para pedir por teléfono o mediante PedidosYa.
- Dirección con enlace a Google Maps, horario de atención e Instagram.

Los pedidos se realizan por teléfono o en PedidosYa; esta web no procesa pedidos ni pagos.

## Ejecutar en local

Necesitás Node.js y npm instalados. En una terminal abierta en la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abrí la dirección local que indique Vite en la terminal. En PowerShell, si la ejecución de `npm.ps1` está bloqueada, usá `npm.cmd` en lugar de `npm`.

Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

La compilación se genera en `dist/`.

## Actualizar el contenido

- **Sabores:** editá `src/data/sabores.js`. Agregá o quitá nombres en la lista `sabores` de la categoría correspondiente. La búsqueda, los filtros y los recuentos se actualizan a partir de ese archivo.
- **Dirección, horario, teléfono y enlaces:** editá `index.html`. Revisá tanto las secciones de delivery y ubicación como el pie de página para mantener los datos coherentes.
- **Estilos:** editá `src/style.scss`.
- **Imágenes e íconos:** están en `public/images/`.

## Tecnologías

HTML, Sass y JavaScript, con Vite para el desarrollo y la compilación.

## Contacto y ubicación

- **Dirección:** Av. Eva Perón 2833, Morón, Buenos Aires.
- **Horario:** todos los días, de 12:00 a 01:00.
- **Teléfono:** [2140-8889](tel:+541121408889).
- **Instagram:** [@heladoscarpino](https://www.instagram.com/heladoscarpino/).
- **PedidosYa:** [Helados Carpino](https://www.pedidosya.com.ar/restaurantes/moron/helados-carpino-menu).
