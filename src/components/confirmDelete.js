export function confirmDelete(id) {
  return `
    <div id="delete-modal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fade-in">
      <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 max-w-sm w-full text-center shadow-2xl mx-4">
        <h3 class="text-xl font-bold text-red-400 mb-2">⚠ ¿Estás seguro?</h3>
        <p class="text-slate-300 mb-6">Esta acción no se puede deshacer. El personaje desaparecerá del multiverso.</p>
        
        <div class="flex justify-center gap-4">
          <button id="btn-cancelar-delete" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition">
            Cancelar
          </button>
          <button id="btn-confirmar-delete" data-id="${id}" class="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white font-medium transition">
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  `;
}
