# Rick and Morty SPA

Aplicación web tipo SPA construida con **JavaScript, HTML, CSS y Vite**.

El proyecto consume la API pública de Rick and Morty para mostrar personajes, episodios y ubicaciones. Además, permite realizar operaciones CRUD visuales sobre personajes sin modificar directamente la API. Los cambios locales se manejan en memoria local o `localStorage`.

---

## Objetivo del proyecto

Construir una SPA que permita:

- Navegar entre vistas sin recargar la página.
- Renderizar personajes, episodios y ubicaciones.
- Crear personajes ficticios.
- Editar personajes renderizados.
- Eliminar personajes visualmente.
- Persistir cambios locales.
- Manejar errores, validaciones y feedback al usuario.

---

## Tecnologías

- JavaScript
- HTML
- CSS
- Vite
- Rick and Morty API
- localStorage
- Git / GitHub

---

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar al proyecto:

```bash
cd NOMBRE_DEL_PROYECTO
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

---

## Rama principal de trabajo

El equipo no debe trabajar directamente sobre `main`.

Flujo recomendado:

```text
main
develop
feature/nombre-del-modulo
```

La rama `develop` es la base común del proyecto.

Cada integrante debe crear su rama desde `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nombre-de-la-rama
```

---

## Ramas asignadas

```text
feature/router-spa
feature/rickmorty-api
feature/characters-crud
feature/state-localstorage
```

---

## Roles del equipo

### Persona 1 — Arquitectura SPA y Routing

Responsabilidades:

- Configurar navegación SPA.
- Crear router.
- Crear layout base.
- Crear navbar.
- Controlar rutas activas.
- Conectar vistas principales.

Archivos principales:

```text
src/main.js
src/router/router.js
src/components/navbar.js
src/styles/base.css
src/styles/layout.css
```

---

### Persona 2 — API, Episodios y Ubicaciones

Responsabilidades:

- Consumir Rick and Morty API.
- Crear servicio API.
- Renderizar episodios.
- Renderizar ubicaciones.
- Manejar loading, errores y respuestas vacías.

Archivos principales:

```text
src/services/api.js
src/views/episodesView.js
src/views/locationsView.js
src/components/episodeCard.js
src/components/locationCard.js
src/components/loading.js
src/components/emptyState.js
```

---

### Persona 3 — CRUD Visual y Formularios

Responsabilidades:

- Crear formulario de personaje.
- Crear componente de card de personaje.
- Validar datos del formulario.
- Conectar botones de editar y eliminar.
- Mostrar confirmaciones.
- Mostrar feedback visual.

Archivos principales:

```text
src/views/createCharacterView.js
src/views/editCharacterView.js
src/components/characterCard.js
src/components/characterForm.js
src/components/confirmModal.js
src/components/toast.js
src/utils/validators.js
src/styles/forms.css
src/styles/feedback.css
```

---

### Persona 4 — Estado, localStorage y Sincronización

Responsabilidades:

- Crear estado global.
- Leer y guardar datos en localStorage.
- Diferenciar personajes de API y personajes locales.
- Manejar personajes creados localmente.
- Manejar ediciones locales.
- Manejar eliminaciones visuales.
- Sincronizar API + localStorage + DOM.

Archivos principales:

```text
src/state/state.js
src/state/charactersState.js
src/services/storage.js
src/utils/normalizeCharacters.js
src/utils/imageFallback.js
```

---

## Estructura del proyecto

```text
src/
│
├── main.js
│
├── router/
│   └── router.js
│
├── views/
│   ├── charactersView.js
│   ├── episodesView.js
│   ├── locationsView.js
│   ├── createCharacterView.js
│   └── editCharacterView.js
│
├── components/
│   ├── navbar.js
│   ├── characterCard.js
│   ├── characterForm.js
│   ├── episodeCard.js
│   ├── locationCard.js
│   ├── toast.js
│   ├── confirmModal.js
│   ├── loading.js
│   └── emptyState.js
│
├── services/
│   ├── api.js
│   └── storage.js
│
├── state/
│   ├── state.js
│   └── charactersState.js
│
├── utils/
│   ├── validators.js
│   ├── normalizeCharacters.js
│   ├── imageFallback.js
│   └── mockData.js
│
└── styles/
    ├── base.css
    ├── layout.css
    ├── cards.css
    ├── forms.css
    └── feedback.css
```

---

## Rutas SPA

La aplicación debe navegar sin recargar la página.

Rutas sugeridas:

```text
#/characters
#/episodes
#/locations
#/create-character
#/edit-character
```

---

## Contrato de vistas

Todas las vistas deben exportar una función que reciba un contenedor.

Ejemplo:

```js
export function renderCharactersView(container) {
  container.innerHTML = `
    <section>
      <h1>Personajes</h1>
    </section>
  `;
}
```

Las vistas pueden ser síncronas o asíncronas.

Ejemplo con async:

```js
export async function renderEpisodesView(container) {
  container.innerHTML = `
    <section>
      <h1>Episodios</h1>
    </section>
  `;
}
```

---

## Contrato API

El archivo `src/services/api.js` debe exportar:

```js
export async function getCharacters() {}

export async function getEpisodes() {}

export async function getLocations() {}
```

### Endpoints usados

```text
https://rickandmortyapi.com/api/character
https://rickandmortyapi.com/api/episode
https://rickandmortyapi.com/api/location
```

---

## Contrato de personaje

Todos los módulos deben usar esta estructura base para personajes:

```js
{
  id: 1,
  source: "api",
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}
```

Para personajes creados localmente:

```js
{
  id: "local-123456",
  source: "local",
  name: "Personaje Ficticio",
  status: "Alive",
  species: "Human",
  gender: "Unknown",
  image: "https://..."
}
```

La propiedad `source` permite diferenciar el origen del personaje:

```text
source: "api"
source: "local"
```

---

## Contrato de episodios

Los episodios deben manejarse con esta estructura normalizada:

```js
{
  id: 1,
  name: "Pilot",
  airDate: "December 2, 2013",
  code: "S01E01",
  charactersCount: 19
}
```

La vista de episodios debe mostrar:

```text
Nombre del episodio
Fecha de emisión
Cantidad de personajes participantes
```

---

## Contrato de ubicaciones

Las ubicaciones deben manejarse con esta estructura normalizada:

```js
{
  id: 1,
  name: "Earth",
  type: "Planet",
  dimension: "Dimension C-137",
  residentsCount: 27
}
```

La vista de ubicaciones debe mostrar:

```text
Nombre
Tipo
Dimensión
Cantidad de residentes
```

---

## Contrato de estado

El archivo `src/state/charactersState.js` debe exportar:

```js
export function getVisibleCharacters() {}

export function createLocalCharacter(characterData) {}

export function editCharacter(characterId, characterData) {}

export function deleteCharacter(characterId) {}
```

---

## Estado global sugerido

```js
export const state = {
  apiCharacters: [],
  localCharacters: [],
  characterOverrides: {},
  deletedCharacterIds: [],
  loading: false,
  error: null,
  feedback: null
};
```

---

## Estrategia de localStorage

La API no debe modificarse directamente.

Los cambios del usuario se guardan localmente.

Claves sugeridas:

```text
localCharacters
characterOverrides
deletedCharacterIds
```

### localCharacters

Guarda personajes ficticios creados por el usuario.

```js
[
  {
    id: "local-123456",
    source: "local",
    name: "Personaje creado",
    status: "Alive",
    species: "Human",
    gender: "Female",
    image: "https://..."
  }
]
```

### characterOverrides

Guarda ediciones locales sobre personajes que vienen de la API.

```js
{
  "1": {
    name: "Rick Editado",
    species: "Human",
    status: "Alive"
  }
}
```

### deletedCharacterIds

Guarda los IDs de personajes de API eliminados visualmente.

```js
[1, 2, 3]
```

---

## Flujo de sincronización

La aplicación debe seguir este flujo:

```text
API Rick and Morty
        ↓
Personajes originales
        ↓
Estado global
        ↓
Aplicar eliminaciones locales
        ↓
Aplicar ediciones locales
        ↓
Agregar personajes ficticios
        ↓
Renderizar DOM
```

La idea central:

```text
La API es fuente externa de solo lectura.
localStorage guarda los cambios del usuario.
El estado global combina ambas fuentes.
El DOM renderiza el resultado final.
```

---

## CRUD de personajes

### Crear personaje

El formulario debe permitir ingresar:

```text
Nombre
Especie
Género
Estado
URL de imagen
```

Condiciones:

```text
Debe renderizarse inmediatamente.
Debe guardarse en localStorage.
Debe coexistir con personajes de la API.
No debe recargar la página.
```

---

### Editar personaje

El usuario debe poder editar:

```text
Nombre
Especie
Estado
```

Restricción:

```text
No se debe modificar directamente la información proveniente de la API.
Las ediciones sobre personajes API se guardan como overrides locales.
```

---

### Eliminar personaje

Condiciones:

```text
Debe existir confirmación antes de eliminar.
La eliminación debe ser visual inmediata.
No debe recargar la página.
El DOM debe actualizarse dinámicamente.
```

---

## Manejo de errores

La aplicación debe manejar:

```text
Errores de API
Respuestas vacías
Imágenes rotas
Formularios incompletos
Errores de localStorage
```

---

## Feedback al usuario

La aplicación debe informar al usuario cuando ocurra:

```text
Creación exitosa
Edición realizada
Eliminación realizada
Formulario incompleto
Error al cargar datos
Respuesta vacía
Imagen no disponible
```

---

## Mock data

El archivo `src/utils/mockData.js` puede usarse para trabajar sin depender de la API o de otros módulos.

Ejemplo:

```js
export const mockCharacters = [
  {
    id: 1,
    source: "api",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    id: "local-001",
    source: "local",
    name: "Personaje Ficticio",
    status: "Alive",
    species: "Human",
    gender: "Unknown",
    image: "https://placehold.co/300x300?text=Character"
  }
];

export const mockEpisodes = [
  {
    id: 1,
    name: "Pilot",
    airDate: "December 2, 2013",
    code: "S01E01",
    charactersCount: 19
  }
];

export const mockLocations = [
  {
    id: 1,
    name: "Earth",
    type: "Planet",
    dimension: "Dimension C-137",
    residentsCount: 27
  }
];
```

---

## Flujo de trabajo en GitHub

1. Actualizar `develop`.

```bash
git checkout develop
git pull origin develop
```

2. Crear rama individual.

```bash
git checkout -b feature/nombre-de-la-rama
```

3. Trabajar únicamente en los archivos asignados.

4. Hacer commits pequeños y claros.

```bash
git add .
git commit -m "Add Rick and Morty API service"
```

5. Subir rama.

```bash
git push origin feature/nombre-de-la-rama
```

6. Crear Pull Request hacia `develop`.

---

## Reglas de trabajo

```text
No trabajar directamente sobre main.
No trabajar directamente sobre develop.
No cambiar contratos sin avisar al equipo.
No renombrar funciones compartidas sin coordinación.
No duplicar lógica innecesariamente.
Usar mockData cuando otro módulo todavía no esté listo.
Cada Pull Request debe probarse antes de enviarse.
```

---

## Definition of Ready

Una tarea está lista para ser tomada cuando tenga:

```text
Responsable
Archivo asignado
Función esperada
Datos de entrada
Datos de salida
Criterio de aceptación
```

Ejemplo:

```text
Tarea: Crear getEpisodes()

Responsable: Persona 2
Archivo: src/services/api.js
Entrada: ninguna
Salida: array de episodios normalizados
Criterio: devuelve id, name, airDate, code y charactersCount
```

---

## Definition of Done

Una tarea está terminada cuando:

```text
El proyecto corre con npm run dev.
No hay errores en consola.
La función exporta lo acordado.
El módulo respeta el contrato definido.
La funcionalidad fue probada manualmente.
El código fue subido a la rama correspondiente.
El Pull Request está listo para revisión.
```

---

## Checklist funcional final

Antes de entregar el proyecto, validar:

```text
La app navega sin recargar.
La ruta de personajes funciona.
La ruta de episodios funciona.
La ruta de ubicaciones funciona.
La ruta de crear personaje funciona.
Se cargan personajes desde la API.
Se cargan episodios desde la API.
Se cargan ubicaciones desde la API.
Se puede crear un personaje ficticio.
El personaje creado se guarda en localStorage.
Se puede editar un personaje.
Se puede eliminar un personaje con confirmación.
Las imágenes rotas muestran placeholder.
Los formularios incompletos muestran error.
Los errores de API muestran mensaje.
El DOM se actualiza dinámicamente.
```

---

## Sustentación técnica

Durante la sustentación, cada integrante debe explicar su módulo.

### Persona 1

```text
Arquitectura SPA
Routing
Navegación sin recarga
Renderizado de vistas
```

### Persona 2

```text
Consumo de API
Episodios
Ubicaciones
Manejo de loading, errores y datos vacíos
```

### Persona 3

```text
CRUD visual
Formularios
Validaciones
Confirmaciones
Feedback al usuario
```

### Persona 4

```text
Estado global
localStorage
Diferencia entre personajes API y locales
Overrides
Deleted IDs
Sincronización de datos
```

---

## Frase clave del proyecto

```text
La Rick and Morty API se usa como fuente externa de solo lectura. 
Las creaciones, ediciones y eliminaciones se manejan en una capa local con localStorage. 
Luego sincronizamos API + estado local y renderizamos el resultado final en el DOM sin recargar la página.
```