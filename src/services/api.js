const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  const ids = Array.from({ length: 826 }, (_, index) => index + 1);

  const listaIds = ids.join(",");

  const respuesta = await fetch(`${API_BASE_URL}/character/${listaIds}`);
  const todosLosPersonajes = await respuesta.json();

  console.log(
    `¡Listo! Traídos ${todosLosPersonajes.length} personajes de un solo viaje.`,
  );
  return todosLosPersonajes;
}

export async function getEpisodes() {
  const ids = Array.from({ length: 51 }, (_, index) => index + 1);

  const listaIds = ids.join(",");

  const respuesta = await fetch(`${API_BASE_URL}/episode/${listaIds}`);

  const todosLosEpisodios = await respuesta.json();

  console.log(
    `¡Listo! Traídos ${todosLosEpisodios.length} episodios de un solo viaje.`,
  );

  return todosLosEpisodios;
}

export async function getLocations() {
  const ids = Array.from({ length: 126 }, (_, index) => index + 1);

  const listaIds = ids.join(",");

  const respuesta = await fetch(`${API_BASE_URL}/location/${listaIds}`);

  const todasLasLocations = await respuesta.json();

  console.log(
    `¡Listo! Traídas ${todasLasLocations.length} locations de un solo viaje.`,
  );

  return todasLasLocations;
}

export { API_BASE_URL };
