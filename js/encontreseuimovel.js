// Abre/fecha apenas o dropdown clicado
document.querySelectorAll(".dropbtn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.stopPropagation();

    // Fecha outros dropdowns antes
    document.querySelectorAll(".dropdown-content").forEach((menu) => {
      if (menu !== this.nextElementSibling) {
        menu.classList.remove("show");
      }
    });

    // Alterna o dropdown clicado
    this.nextElementSibling.classList.toggle("show");
  });
});

// Fecha dropdowns se clicar fora
window.addEventListener("click", function () {
  document.querySelectorAll(".dropdown-content").forEach((menu) => {
    menu.classList.remove("show");
  });
});
