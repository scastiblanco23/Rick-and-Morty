
export function CharacterCard(character) {
    return `
      <article class="character-card" data-id="${character.id}">
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.species}</p>
        <p>${character.status}</p>
      </article>
    `;
  }