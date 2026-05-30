const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  const characters = [];
  const urlNext = `${API_BASE_URL}/character`;

  while (urlNext) {
    const response = await fetch(urlNext);
    const data = response.json();

    characters = characters.concat(data.results);

    urlNext = data.info.next;
  }

  return characters;
}

export async function getEpisodes() {
  const characters = [];
  const urlNext = `${API_BASE_URL}/episode`;

  while (urlNext) {
    const response = await fetch(urlNext);
    const data = response.json();

    characters = characters.concat(data.results);

    urlNext = data.info.next;
  }

  return characters;
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
