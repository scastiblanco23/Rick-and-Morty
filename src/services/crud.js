import { getCharacters, getEpisodes, getLocations } from "./api.js";

export const appState = {
  characters: [],
  episodes: [],
  locations: [],
};

export async function saveAppState() {
  const localCharacters = localStorage.getItem("characters");

  if (localCharacters) {
    appState.characters = JSON.parse(localCharacters);
  } else {
    appState.characters = await getCharacters();

    localStorage.setItem("characters", JSON.stringify(appState.characters));
  }

  const localEpisodes = localStorage.getItem("episodes");

  if (localEpisodes) {
    appState.episodes = JSON.parse(localEpisodes);
  } else {
    appState.episodes = await getEpisodes();

    localStorage.setItem("episodes", JSON.stringify(appState.episodes));
  }
  const localLocations = localStorage.getItem("locations");

  if (localLocations) {
    appState.locations = JSON.parse(localLocations);
  } else {
    appState.locations = await getLocations();

    localStorage.setItem("locations", JSON.stringify(appState.locations));
  }
}

export function createCharacterView(name, species, gender, status, imgUrl) {
  const newCharacter = {
    id: Date.now(),
    source: "custom",
    name,
    species,
    gender,
    status,
    image: imgUrl,
    origin: { name: "Desconocido" },
  };

  appState.characters.unshift(newCharacter);

  localStorage.setItem("characters", JSON.stringify(appState.characters));
}

export function deleteCharacterView(id) {
  appState.characters = appState.characters.filter((p) => p.id !== id);

  localStorage.setItem("characters", JSON.stringify(appState.characters));
}

export function editCharacterView(id, newName, newState) {
  appState.characters = appState.characters.map((p) => {
    if (p.id === id) {
      return {
        ...p,
        name: newName,
        status: newState,
      };
    }

    return p;
  });

  localStorage.setItem("characters", JSON.stringify(appState.characters));
}
