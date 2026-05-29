export function renderCreateCharacterView() {
  return `
    <div
      id="create-modal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >

      <div
        class="bg-white p-6 rounded-xl w-96"
      >

        <h1 class="text-2xl font-bold mb-4">
          Crear personaje
        </h1>

        <form
          id="form-create"
          class="flex flex-col gap-3"
        >

          <label>Nombre</label>

          <input
            type="text"
            name="name"
            placeholder="nombre del personaje"
            class="border p-2"
          />

          <label>Especie</label>

          <input
            type="text"
            name="species"
            placeholder="Especie del personaje"
            class="border p-2"
          />

          <label>Genero</label>

          <input
            type="text"
            name="gender"
            placeholder="Genero del personaje"
            class="border p-2"
          />

          <label>Estado</label>

          <input
            type="text"
            name="status"
            placeholder="Estado del personaje"
            class="border p-2"
          />

          <label>Imagen URL</label>

          <input
            type="text"
            name="imgUrl"
            placeholder="url de la imagen"
            class="border p-2"
          />

          <button
            class="bg-green-500 text-white p-2 rounded"
          >
            Crear Personaje
          </button>

        </form>

      </div>

    </div>
  `;
}
