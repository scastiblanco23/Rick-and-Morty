export function CharacterCard(character) {
  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
        ? "bg-red-500"
        : "bg-gray-500";

  return `
    <div class="character-card bg-slate-800 rounded-xl overflow-hidden w-72"data-id="${character.id}">

      <div class="relative">
        <img src="${character.image}" alt="${character.name}" class="w-full h-56 object-cover"/>
          <span class="absolute top-3 right-3 ${statusColor} text-white text-xs px-3 py-1 rounded-full">${character.status}</span>
      </div>

      <div class="p-4 text-white h-[32.5]">

        <h2 class="text-xl font-bold mb-2">
          ${character.name}
        </h2>

        <p class="text-sm text-gray-300">
          ${character.species}
        </p>

        <p class="text-sm text-gray-400 mb-4">
          ${character.origin.name}
        </p>

        
      </div>
      <div class="flex gap-2 p-4 text-white">

          <button type="button" class="bg-blue-500 cursor-pointer px-4 py-2 rounded-lg text-sm w-full" data-action="edit" data-id="${character.id}"> Editar </button>

          <button type="button" class="bg-red-500 cursor-pointer px-4 py-2 rounded-lg text-sm w-full" data-action="delete" data-id="${character.id}"> Eliminar </button>

        </div>
    </div>
  `;
}
