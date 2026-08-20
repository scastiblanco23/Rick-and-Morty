import { Navbar } from "../components/navbar.js";

import { renderCharactersView } from "../views/charactersView.js";
import { renderEpisodesView } from "../views/episodesView.js";
import { renderLocationsView } from "../views/locationsView.js";

const routes = {
  "#/personaje": renderCharactersView,
  "#/episodios": renderEpisodesView,
  "#/locaciones": renderLocationsView,
};

export function initRouter() {
  window.addEventListener("hashchange", renderRoute);

  if (!window.location.hash) {
    window.location.hash = "#/personajes";
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
