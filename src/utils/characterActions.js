import {
  deleteCharacterView,
  editCharacterView,
  appState,
} from "../services/crud.js";

import { renderCharactersView } from "../views/charactersView.js";

import { renderEditCharacterView } from "../views/editCharacterView.js";
import { renderCreateCharacterView } from "../views/createCharacterView.js";

export function setupCharacterActions() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const action = button.dataset.action;

    const id = Number(button.dataset.id);

    const container = document.querySelector("#app");

    // ELIMINAR

    if (action === "delete") {
      deleteCharacterView(id);

      await renderCharactersView(container);

      console.log(`Personaje ${id} eliminado`);
    }

    // EDITAR

    if (action === "edit") {
      const character = appState.characters.find(
        (character) => character.id === id,
      );

      const modalHTML = renderEditCharacterView(character);

      document.body.insertAdjacentHTML("beforeend", modalHTML);

      const modal = document.querySelector("#edit-modal");

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.remove();
        }
      });

      const form = document.querySelector("#form-edit");

      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const id = Number(formData.get("id-character"));

        const newName = formData.get("new-name");

        const newState = formData.get("new-state");

        editCharacterView(id, newName, newState);

        modal.remove();

        await renderCharactersView(container);

        console.log(`Personaje ${id} editado`);
      });
    }
  });
}
