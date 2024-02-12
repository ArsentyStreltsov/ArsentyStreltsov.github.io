
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





// Бургер
const burger = document.getElementById("burger")
const nav = document.getElementById("nav")

burger.addEventListener("click", function () {
  nav.classList.toggle("nav--active")
  burger.classList.toggle("burger--active")
  document.body.classList.toggle("stop-scroll")
})



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

  breakpoints: {
    1270: {
      slidesPerView: 4,
    },
    1152: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,

    }
  }
});



// // код для того, чтобы свайпер не начинал прокрутку, пока не виден на экране
// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function enableAutoplayIfSwiperInView() {
//   if (isElementInViewport(document.querySelector('#gallery'))) {
//     swiper.autoplay.start();
//     window.removeEventListener('scroll', enableAutoplayIfSwiperInView);
//   }
// }

// window.addEventListener('scroll', enableAutoplayIfSwiperInView);






// переключение по нажатию на карточки

document.querySelectorAll('.swiper-slide').forEach(function (slide) {
  slide.addEventListener('click', function () {
    let clickedIndex = this.getAttribute('data-swiper-slide-index'); 

    
    swiper.slideToLoop(clickedIndex);
  });
});




// перевод языка

document.addEventListener('DOMContentLoaded', () => {
  const changeLanguage = (language) => {
    document.querySelectorAll("[class^='lng-']").forEach((elem) => {
      const key = elem.className.split(' ')[0]; // Берём ключ класса, например 'lng-firstpage-heading'
      if (langArr[key]) {
        elem.textContent = langArr[key][language];
      }
    });
  };

  document.querySelector('.EN_language').addEventListener('click', () => changeLanguage('en'));
  document.querySelector('.RU_language').addEventListener('click', () => changeLanguage('ru'));
});





// анимации

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element_show');
    } //else {
    //   change.target.classList.remove('element_show');
    // }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element_animation');

elements.forEach((elm) => {
  observer.observe(elm);
});
