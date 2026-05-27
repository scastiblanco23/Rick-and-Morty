
import { mockCharacters } from "../utils/mockData.js";
import { CharacterCard } from "../components/characterCard.js";

export function renderCharactersView(container) {
  container.innerHTML = `
    <section class="page-section">
      <div class="page-header">
        <h2>Personajes</h2>
        <p>Vista base de personajes. Aquí se integrará API + estado + CRUD.</p>
      </div>

      <div class="cards-grid">
        ${mockCharacters.map((character) => CharacterCard(character)).join("")}
      </div>
    </section>
  `;
}