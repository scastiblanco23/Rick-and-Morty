const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  const ids = Array.from({ length: 826 }, (_, index) => index + 1);

  const listaIds = ids.join(",");

  const respuesta = await fetch(
    `https://rickandmortyapi.com/api/character/${listaIds}`,
  );
  const todosLosPersonajes = await respuesta.json();

  console.log(
    `¡Listo! Traídos ${todosLosPersonajes.length} personajes de un solo viaje.`,
  );
  return todosLosPersonajes;
}

export async function getEpisodes() {
  return [];
}

export async function getLocations() {
  return [];
}

export { API_BASE_URL };
