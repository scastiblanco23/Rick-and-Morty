export function EpisodeCard(episode) {
  return `
    <div
      class="episode-card bg-slate-800 rounded-xl p-5 w-72 flex flex-col justify-between"
      data-id="${episode.id}"
    >

      <span
        class="bg-purple-500 text-white text-xs px-3 py-1 rounded-full w-fit mb-4"
      >
        ${episode.episode}
      </span>

      <div class="text-white h-[140px]">

        <h2 class="text-xl font-bold mb-3">
          ${episode.name}
        </h2>

        <p class="text-sm text-gray-300 mb-2">
          Fecha: ${episode.air_date}
        </p>

        <p class="text-sm text-gray-400">
          Personajes: ${episode.characters.length}
        </p>

      </div>

    </div>
  `;
}
