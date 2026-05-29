import { getEpisodes } from "../services/api.js";
import { EpisodeCard } from "../components/episodeCard.js";
import { Pagination } from "../components/pagination.js";

let currentPage = 1;

export async function renderEpisodesView(container) {
  const episodes = await getEpisodes();

  const episodesPerPage = 10;

  const totalPages = Math.ceil(episodes.length / episodesPerPage);

  const start = (currentPage - 1) * episodesPerPage;

  const end = start + episodesPerPage;

  const paginatedEpisodes = episodes.slice(start, end);

  container.innerHTML = `
    <section class="w-full min-h-screen py-4 px-40 bg-slate-900">

      <div class="mb-8">
        <h2 class="text-4xl font-bold text-white mb-2">
          Episodios
        </h2>

        <p class="text-gray-400">
          Explora los episodios del universo Rick and Morty.
        </p>
      </div>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 place-items-center">

        ${paginatedEpisodes.map((episode) => EpisodeCard(episode)).join("")}

      </div>

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

      await renderEpisodesView(container);
    });
  });
}
