import { getCharacters } from "./api";

export const appState = {
  characters: [],
};

export async function saveAppState() {
  appState.characters = await getCharacters();

  localStorage.setItem("characters", JSON.stringify(appState.characters));
}

export function createCharacterView(name, species, gender, status, imgUrl) {
  const newCharacter = {
    id: Date.now(),
    source: "custom",
    name: name,
    species: species,
    gender: gender,
    imgUrl: imgUrl,
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
      return { ...p, name: newName, status: newState };
    }
    return p;
  });
}
