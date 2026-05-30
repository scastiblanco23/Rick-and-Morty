const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  let characters = [];
  let urlNext = `${API_BASE_URL}/character`;

  while (urlNext) {
    const response = await fetch(urlNext);
    const data = response.json();

    characters = characters.concat(data.results);

    urlNext = data.info.next;
  }

  return characters;
}

export async function getEpisodes() {
  let episodes = [];
  let urlNext = `https://rickandmortyapi.com/api/episode`;

  while (urlNext) {
    const response = await fetch(urlNext);
    const data = await response.json();
    episodes = episodes.concat(data.results);

    urlNext = data.info.next;
  }

  return episodes;
}

export async function getLocations() {
  let locations = [];
  let urlNext = `https://rickandmortyapi.com/api/location`;

  while (urlNext) {
    const response = await fetch(urlNext);
    const data = await response.json();
    locations = locations.concat(data.results);

    urlNext = data.info.next;
  }

  return locations;
}

export { API_BASE_URL };
