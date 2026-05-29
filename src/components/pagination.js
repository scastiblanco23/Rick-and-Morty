export function Pagination(totalPages, currentPage) {
  return `
    <div class="flex justify-center items-center gap-3 mt-10">

      
      <button
        class="
          px-4 py-2 rounded-lg text-white
          ${currentPage === 1 ? "bg-slate-500 cursor-not-allowed" : "bg-slate-700"}
        "
        data-page="prev"
        ${currentPage === 1 ? "disabled" : ""}
      >
        ←
      </button>

     
      <span class="text-white font-semibold">
        Página ${currentPage} de ${totalPages}
      </span>

     
      <button
        class="
          px-4 py-2 rounded-lg text-white
          ${
            currentPage === totalPages
              ? "bg-slate-500 cursor-not-allowed"
              : "bg-slate-700"
          }
        "
        data-page="next"
        ${currentPage === totalPages ? "disabled" : ""}
      >
        →
      </button>

    </div>
  `;
}
