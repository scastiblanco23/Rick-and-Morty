import {
  deleteCharacterView,
  editCharacterView,
  createCharacterView,
  appState,
} from "../services/crud.js";

import { renderCharactersView } from "../views/charactersView.js";
import { renderEditCharacterView } from "../views/editCharacterView.js";
import { CreateCharacterForm } from "../components/characterForm.js";

function getViewContainer() {
  return document.querySelector("#view-container");
}

function openCreateModal() {
  document.body.insertAdjacentHTML("beforeend", CreateCharacterForm());

  const modal = document.querySelector("#create-modal");
  const form = document.querySelector("#form-create");

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    createCharacterView(
      formData.get("name"),
      formData.get("species"),
      formData.get("gender"),
      formData.get("status"),
      formData.get("imgUrl"),
    );

    modal.remove();
    await renderCharactersView(getViewContainer());
  });
}

export function setupCharacterActions() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const action = button.dataset.action;
    const id = Number(button.dataset.id);
    const container = getViewContainer();

    if (action === "create") {
      openCreateModal();
      return;
    }

    if (action === "delete") {
      const sure = confirm(
        "¿Seguro que quieres eliminar este personaje del multiverso?",
      );

      if (sure) {
        deleteCharacterView(id);
        await renderCharactersView(container);
        return;
      } else {
        return;
      }
    }

    if (action === "edit") {
      const character = appState.characters.find(
        (character) => character.id === id,
      );

      document.body.insertAdjacentHTML(
        "beforeend",
        renderEditCharacterView(character),
      );

      const modal = document.querySelector("#edit-modal");
      const form = document.querySelector("#form-edit");

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.remove();
        }
      });

      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const characterId = Number(formData.get("id-character"));
        const newName = formData.get("new-name");
        const newState = formData.get("new-state");

        editCharacterView(characterId, newName, newState);
        modal.remove();
        await renderCharactersView(container);
      });
    }
  });
}
