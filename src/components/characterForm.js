export function CreateCharacterForm() {
  return `
    <div
      id="create-modal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-xl w-96">
        <h2 class="text-2xl font-bold mb-4">
          Crear personaje
        </h2>

        <form id="form-create" class="flex flex-col gap-3">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre del personaje"
            class="border p-2"
            required
          />

          <label>Especie</label>
          <input
            type="text"
            name="species"
            placeholder="Especie del personaje"
            class="border p-2"
            required
          />

          <label>Género</label>
          <input
            type="text"
            name="gender"
            placeholder="Género del personaje"
            class="border p-2"
            required
          />

          <label>Estado</label>
          <input
            type="text"
            name="status"
            placeholder="Estado del personaje"
            class="border p-2"
            required
          />

          <label>Imagen URL</label>
          <input
            type="text"
            name="imgUrl"
            placeholder="URL de la imagen"
            class="border p-2"
            required
          />

          <button type="submit" class="bg-green-500 text-white p-2 rounded">
            Crear personaje
          </button>
        </form>
      </div>
    </div>
  `;
}
