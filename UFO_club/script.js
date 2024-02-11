
// прозрачность хэдэра

window.addEventListener('DOMContentLoaded', (event) => {
  const headerBackground = document.querySelector('.header_background');

  function checkScroll() {
    if (window.scrollY > 20) {
      headerBackground.style.opacity = '0.8'; 
    } else {
      headerBackground.style.opacity = '1';
    }
  }

  window.addEventListener('scroll', checkScroll);
});



// свайпер

const swiper = new Swiper('#gallery', {
  loop: true,
  centeredSlides: true,
  slidesPerView: '4',
  spaceBetween: 0,


  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '#gallery-next',
    prevEl: '#gallery-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



// переключение по нажатию на карточки

document.querySelectorAll('.swiper-slide').forEach(function (slide) {
  slide.addEventListener('click', function () {
    let clickedIndex = this.getAttribute('data-swiper-slide-index'); 

    
    swiper.slideToLoop(clickedIndex);
  });
});



