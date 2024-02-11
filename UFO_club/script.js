

window.addEventListener('DOMContentLoaded', (event) => {
  const headerBackground = document.querySelector('.header_background');

  function checkScroll() {
    if (window.scrollY > 20) {
      headerBackground.style.opacity = '0.8'; // Теперь изменяем только фон
    } else {
      headerBackground.style.opacity = '1';
    }
  }

  window.addEventListener('scroll', checkScroll);
});
