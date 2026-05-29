import { getCharacters } from "../services/api.js";
import { CharacterCard } from "../components/characterCard.js";
import { Pagination } from "../components/pagination.js";

let currentPage = 1;

export async function renderCharactersView(container) {
  const characters = await getCharacters();

  // Cantidad por página
  const charactersPerPage = 10;

  // Total de páginas
  const totalPages = Math.ceil(characters.length / charactersPerPage);

  // Índices
  const start = (currentPage - 1) * charactersPerPage;

  const end = start + charactersPerPage;

  // Personajes paginados
  const paginatedCharacters = characters.slice(start, end);

  container.innerHTML = `
    <section class="w-full min-h-screen py-4 px-40 bg-slate-900">

      <!-- Header -->
      <div class="mb-8">
        <h2 class="text-4xl font-bold text-white mb-2">
          Personajes
        </h2>
      </div>

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
