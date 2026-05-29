export function renderEditCharacterView(container) {
  container.innerHTML = `
    <section class="page-section">
      <div class="page-header">
        <h2>Editar personaje</h2>
        <form id="form-edit" class="border-2 flex flex-col w-70 p-3">
        <label for="">id</label
        ><input
          type="text"
          name="id-character"
          placeholder="nombre del personaje"
          class="border p-2 mt-3"
        />
        <label for="">Nuevo nombre</label
        ><input
          type="text"
          name="new-name"
          placeholder="Especie del personaje"
          class="border p-2 mt-3"
        />
        <label for="">Nuevo estado</label
        ><input
          type="text"
          name="new-state"
          placeholder="Genero del personaje"
          class="border p-2 mt-3"
        />
        <button class="w-full cursor-pointer">Enviar datos</button>
      
      </div>
    </section>
  `;
}
