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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const items = carousel.querySelectorAll(".carousel-item");
    const dotsContainer = carousel.querySelector(".carousel-dots");
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");

    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(items.length / itemsPerSlide);
    let currentSlide = 0;

    // Criar marcadores
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("button");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll("button");

    function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      const slideWidth = carousel.clientWidth;
      track.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[currentSlide].classList.add("active");
    }

    // Botões de navegação
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      goToSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    });

    // autoplay
    let interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    }, 5000);

    // pausa autoplay quando o mouse passa por cima
    carousel.addEventListener("mouseenter", () => clearInterval(interval));
    carousel.addEventListener("mouseleave", () => {
      interval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
      }, 5000);
    });

    goToSlide(0);
  });
});
