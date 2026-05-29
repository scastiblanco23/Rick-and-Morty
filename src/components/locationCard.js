export function LocationCard(location) {
  return `
    <div
      class="location-card bg-slate-800 rounded-xl p-5 w-72 flex flex-col justify-between"
      data-id="${location.id}"
    >

      <span
        class="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full w-fit mb-4"
      >
        ${location.type}
      </span>

      <div class="text-white h-[140px]">

        <h2 class="text-xl font-bold mb-3">
          ${location.name}
        </h2>

        <p class="text-sm text-gray-300 mb-2">
          Dimensión: ${location.dimension}
        </p>

        <p class="text-sm text-gray-400">
          Residentes: ${location.residents.length}
        </p>

      </div>

    </div>
  `;
}
