import "./styles/base.css";
import "./styles/layout.css";
import "./styles/cards.css";
import "./styles/forms.css";
import "./styles/feedback.css";

import { initRouter } from "./router/router.js";

document.addEventListener("DOMContentLoaded", () => {
  initRouter();
});