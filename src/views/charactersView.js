import { appState } from "../services/crud.js";
import { CharacterCard } from "../components/characterCard.js";
import { Pagination } from "../components/pagination.js";

let currentPage = 1;

export async function renderCharactersView(container) {
  const characters = appState.characters;

  const charactersPerPage = 10;

  const totalPages = Math.ceil(characters.length / charactersPerPage);

  const start = (currentPage - 1) * charactersPerPage;

  const end = start + charactersPerPage;

  const paginatedCharacters = characters.slice(start, end);

  container.innerHTML = `
    <section class="w-full min-h-screen py-4 px-40 bg-slate-900">

      <!-- Header -->
      <div class="mb-8">
        <h2 class="text-4xl font-bold text-white mb-2">
          Personajes
        </h2>
      </div>
      <button
        type="button"
        data-action="create"
        class="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-lg mb-6"
      >
        Crear personaje
      </button>

      <!-- Grid -->
      <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 place-items-center">

        ${paginatedCharacters
          .map((character) => CharacterCard(character))
          .join("")}

      </div>

      <!-- Pagination -->
      ${Pagination(totalPages, currentPage)}

    </section>
  `;

  const paginationButtons = container.querySelectorAll("[data-page]");

  paginationButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.page;

      if (action === "next" && currentPage < totalPages) {
        currentPage++;
      }

      if (action === "prev" && currentPage > 1) {
        currentPage--;
      }

      await renderCharactersView(container);
    });
  });
}
