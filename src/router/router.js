import { Navbar } from "../components/navbar.js";

import { renderCharactersView } from "../views/charactersView.js";
import { renderEpisodesView } from "../views/episodesView.js";
import { renderLocationsView } from "../views/locationsView.js";
import { renderCreateCharacterView } from "../views/createCharacterView.js";
import { renderEditCharacterView } from "../views/editCharacterView.js";

const routes = {
  "#/characters": renderCharactersView,
  "#/episodes": renderEpisodesView,
  "#/locations": renderLocationsView,
  "#/create-character": renderCreateCharacterView,
  "#/edit-character": renderEditCharacterView,
};

export function initRouter() {
  window.addEventListener("hashchange", renderRoute);

  if (!window.location.hash) {
    window.location.hash = "#/characters";
    return;
  }

  renderRoute();
}

async function renderRoute() {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("No existe el contenedor #app");
    return;
  }

  const currentRoute = window.location.hash;
  const view = routes[currentRoute] || renderCharactersView;

  app.innerHTML = `
    ${Navbar(currentRoute)}
    <main id="view-container" class="view-container"></main>
  `;

  const container = document.querySelector("#view-container");

  try {
    await view(container);
  } catch (error) {
    console.error(error);
    container.innerHTML = `
      <section>
        <h1>Error</h1>
        <p>No fue posible renderizar esta vista.</p>
      </section>
    `;
  }
}