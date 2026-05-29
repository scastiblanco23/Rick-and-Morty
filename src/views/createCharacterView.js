export function renderCreateCharacterView(container) {
  container.innerHTML = `
      <section>
        <h1>Crear personaje</h1>
        <section class="flex justify-center">
      <form id="form-create" class="border-2 flex flex-col w-70 p-3">
        <label for="">Nombre</label
        ><input
          type="text"
          name="name"
          placeholder="nombre del personaje"
          class="border p-2 mt-3"
        />
        <label for="">Especie</label
        ><input
          type="text"
          name="species"
          placeholder="Especie del personaje"
          class="border p-2 mt-3"
        />
        <label for="">Genero</label
        ><input
          type="text"
          name="gender"
          placeholder="Genero del personaje"
          class="border p-2 mt-3"
        />
        <label for="">Estado</label
        ><input
          type="text"
          name="status"
          placeholder="Estado del personaje"
          class="border p-2 mt-3"
        />
        <label for="">imagen url</label
        ><input
          type="text"
          name="imgUrl"
          placeholder="url de la imagen"
          class="border p-2 mt-3"
        />
        <button class="w-full cursor-pointer">Crear Personaje</button>
      </form>
    </section>

      </section>
    `;
}
