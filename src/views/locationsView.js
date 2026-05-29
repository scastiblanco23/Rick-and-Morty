import { getLocations } from "../services/api.js";
import { LocationCard } from "../components/locationCard.js";
import { Pagination } from "../components/pagination.js";

const cardsPerPage = 10;

let currentPage = 1;

export async function renderLocationsView(container) {
  const locations = await getLocations();

  const start = (currentPage - 1) * cardsPerPage;

  const end = start + cardsPerPage;

  const currentLocations = locations.slice(start, end);

  const totalPages = Math.ceil(locations.length / cardsPerPage);

  container.innerHTML = `
    <section class="w-full min-h-screen py-4 px-40 bg-slate-900">

      <div class="mb-8">
        <h2 class="text-4xl font-bold text-white mb-2">
          Ubicaciones
        </h2>

        <p class="text-gray-400">
          Explora las dimensiones y lugares del universo Rick and Morty.
        </p>
      </div>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 place-items-center">

        ${currentLocations.map((location) => LocationCard(location)).join("")}

      </div>

      ${Pagination(totalPages, currentPage)}

    </section>
  `;

  const paginationButtons = container.querySelectorAll("[data-page]");

  paginationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.page;

      if (action === "next" && currentPage < totalPages) {
        currentPage++;
      }

      if (action === "prev" && currentPage > 1) {
        currentPage--;
      }

      renderLocationsView(container);
    });
  });
}
