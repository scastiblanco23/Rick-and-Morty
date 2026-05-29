import "./styles/base.css";
import "./styles/layout.css";
import "./styles/cards.css";
import "./styles/forms.css";
import "./styles/feedback.css";

import { initRouter } from "./router/router.js";

import { saveAppState } from "./services/crud.js";

import { setupCharacterActions } from "./utils/characterActions.js";

document.addEventListener("DOMContentLoaded", async () => {
  await saveAppState();

  setupCharacterActions();

  initRouter();
});
