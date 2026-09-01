document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion .item .header").forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentNode;
      
      // Se o item clicado já estiver ativo, ele fecha.
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        // Remove a classe "active" de todos os itens do FAQ
        document
          .querySelectorAll(".accordion .item")
          .forEach((i) => i.classList.remove("active"));
          
        // Adiciona a classe "active" apenas no item clicado
        item.classList.add("active");
      }
    });
  });
});



(function () {
  const cards     = Array.from(document.querySelectorAll('.testimonial-card'));
  const dotsContainer = document.querySelector('.slider-dots');
  let page        = 0;

  function getPerPage() {
    return window.innerWidth <= 900 ? 1 : 2;
  }

  function buildDots() {
    const perPage    = getPerPage();
    const totalPages = Math.ceil(cards.length / perPage);

    dotsContainer.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.classList.add('slider-dot');
      dot.setAttribute('aria-label', `Page ${i + 1}`);
      if (i === page) dot.classList.add('slider-dot--active');
      dot.addEventListener('click', () => { page = i; render(); });
      dotsContainer.appendChild(dot);
    }
  }

  function render() {
    const perPage    = getPerPage();
    const totalPages = Math.ceil(cards.length / perPage);

    if (page >= totalPages) page = totalPages - 1;

    cards.forEach((card, i) => {
      const inView = i >= page * perPage && i < (page + 1) * perPage;
      card.style.display = inView ? '' : 'none';
    });

    Array.from(dotsContainer.querySelectorAll('.slider-dot')).forEach((dot, i) => {
      dot.classList.toggle('slider-dot--active', i === page);
    });
  }

  window.addEventListener('resize', () => {
    page = 0;
    buildDots();
    render();
  });

  buildDots();
  render();
})();