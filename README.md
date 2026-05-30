# Rick and Morty SPA

SPA en JavaScript vanilla que consume la [Rick and Morty API](https://rickandmortyapi.com). Muestra personajes, episodios y ubicaciones con navegación por hash, sin recargar la página. Los personajes se pueden crear, editar y eliminar de forma local (los cambios se guardan en `localStorage`, sin modificar la API).

## Tecnologías

- JavaScript 
- Vite
- Tailwind CSS
- Rick and Morty API + `localStorage`

## Inicio rápido

```bash
npm install
npm run dev
```

## Rutas

| Ruta | Vista |
|------|--------|
| `#/personajes` | Listado con paginación y CRUD |
| `#/episodios` | Episodios de la API |
| `#/locaciones` | Ubicaciones de la API |

## Estructura

```text
src/
├── main.js              # Arranque: estado, acciones, router
├── router/router.js     # Navegación SPA por hash
├── views/               # Personajes, episodios, ubicaciones
├── components/          # Navbar, cards, formularios, paginación
├── services/
│   ├── api.js           # Fetch a la API
│   └── crud.js          # Estado global + localStorage
└── utils/characterActions.js  # Crear / editar / eliminar
```

## Flujo de datos

1. Al cargar: datos desde `localStorage` o, si no existen, desde la API.
2. El router renderiza la vista según el hash.
3. CRUD de personajes: modales → `crud.js` → `localStorage` → re-render de la vista.
