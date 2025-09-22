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

// Máscara simples para telefone
const contatoInput = document.getElementById("contato");
contatoInput.addEventListener("input", function (e) {
  let v = e.target.value.replace(/\D/g, "");
  if (v.length > 10) {
    v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else {
    v = v.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, "($1) $2-$3");
  }
  e.target.value = v;
});

// Validação simples
document.getElementById("formImovel").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Dados enviados com sucesso! (Aqui você pode integrar com o backend)");
});
