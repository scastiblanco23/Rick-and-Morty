export function Navbar(currentRoute) {
  const links = [
    { label: "Personajes", route: "#/personajes" },
    { label: "Episodios", route: "#/episodios" },
    { label: "Ubicaciones", route: "#/locaciones" },
  ];

  return `
    <header class="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800 shadow-lg shadow-black/20">
      <div class="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <a href="#/personajes" class="flex items-center gap-3 group">
          <div>
            <h1 class="text-xl font-bold text-white leading-tight">
              Rick and Morty
            </h1>
            <p class="text-xs text-slate-400 tracking-widest uppercase">
              SPA
            </p>
          </div>
        </a>

        <nav class="flex flex-wrap gap-2">
          ${links
            .map((link) => {
              const isActive = currentRoute === link.route;

              return `
                <a
                  href="${link.route}"
                  class="
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-green-500 text-slate-950 shadow-md shadow-green-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    }
                  "
                >
                  ${link.label}
                </a>
              `;
            })
            .join("")}
        </nav>
      </div>
    </header>
  `;
}
