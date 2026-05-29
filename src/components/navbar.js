
export function Navbar(currentRoute) {
    const links = [
      { label: "Personajes", route: "#/personajes" },
      { label: "Episodios", route: "#/episodios" },
      { label: "Ubicaciones", route: "#/locaciones" },
      { label: "Crear personaje", route: "#/crear-usuario" },
    ];
  
    return `
      <header class="app-header">
        <h1>Rick and Morty SPA</h1>
  
        <nav class="navbar">
          ${links
            .map((link) => {
              const activeClass = currentRoute === link.route ? "active" : "";
  
              return `
                <a href="${link.route}" class="nav-link ${activeClass}">
                  ${link.label}
                </a>
              `;
            })
            .join("")}
        </nav>
      </header>
    `;
  }