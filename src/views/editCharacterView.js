export function renderEditCharacterView(character) {
  return `
    <div
      id="edit-modal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >

      <div class="bg-white p-6 rounded-xl w-96">

        <h2 class="text-2xl font-bold mb-4">
          Editar personaje
        </h2>

        <form
          id="form-edit"
          class="flex flex-col gap-3"
        >

          <input
            type="hidden"
            name="id-character"
            value="${character.id}"
          />

          <label>Nuevo nombre</label>

          <input
            type="text"
            name="new-name"
            value="${character.name}"
            class="border p-2"
          />

          <label>Nuevo estado</label>

          <input
            type="text"
            name="new-state"
            value="${character.status}"
            class="border p-2"
          />

          <button
            class="bg-blue-500 text-white p-2 rounded"
          >
            Guardar cambios
          </button>

        </form>

      </div>

    </div>
  `;
}
