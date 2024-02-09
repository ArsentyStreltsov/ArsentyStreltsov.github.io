// burger menu

document.addEventListener('DOMContentLoaded', function () {
  let headerHeight = document.querySelector('header').offsetHeight;
  
window.addEventListener('resize', function () {
  // Обновляем значение headerHeight при изменении размеров окна
  headerHeight = document.querySelector('header').offsetHeight;
  });

const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 0,
        behavior: 'smooth'
      });
    }

    // Закрываем меню, если оно открыто
    document.getElementById('check').checked = false;
  });
  });
});


// galleries

const first_swiper = new Swiper("#first_swiper", {
  loop: true,
  freeMode: true,

  navigation: {
    prevEl: "#first_swiper_prev",
    nextEl: "#first_swiper_next"
  },

  breakpoints: {
    1120: {
      slidesPerView: 3,
    },  
    800: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    }

  }
});

const second_swiper = new Swiper("#second_swiper", {
  loop: true,
  freeMode: true,

  slidesPerView: 1,


  navigation: {
    prevEl: "#second_swiper_prev",
    nextEl: "#second_swiper_next",
  }
});

const third_swiper = new Swiper("#third_swiper", {
  loop: true,
  freeMode: true,

  slidesPerView: 1,


  navigation: {
    prevEl: "#third_swiper_prev",
    nextEl: "#third_swiper_next"
  }
});


const fourth_swiper = new Swiper("#fourth_swiper", {
  loop: true,
  freeMode: true,

  navigation: {
    prevEl: "#fourth_swiper_prev",
    nextEl: "#fourth_swiper_next"
  },

  breakpoints: {
    1120: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    }

  }
});


// Modal windows #1

let scrollPosition = 0; // Переменная для хранения позиции прокрутки

// Функция для блокировки прокрутки фона
function lockScroll() {
  scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; // Сохраняем текущую позицию прокрутки
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`; // Смещаем body, чтобы избежать видимого прыжка
  document.body.style.width = '100%';
}

// Функция для разблокировки прокрутки фона
function unlockScroll() {
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
}

const callFromBtn = document.getElementById("call-form")
const modalCallForm = document.getElementById("modal-call-form")

// Открытие модального окна
callFromBtn.addEventListener("click", function () {
  modalCallForm.classList.add("modal-parent--open");
  lockScroll();
})

// Закрытие модального окна
modalCallForm.querySelector(".modal").addEventListener("click", function (event) {
  event._isClick = true
})
modalCallForm.addEventListener("click", function (event) {
  if (event._isClick === true) return
  modalCallForm.classList.remove("modal-parent--open");
  unlockScroll();
})

// Закрытие при нажатии на Esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open")
  }
})


// Modal windows #2

const callFromBtn2 = document.getElementById("call-form-2")
const modalCallForm2 = document.getElementById("modal-call-form-2")

// Открытие модального окна
callFromBtn2.addEventListener("click", function () {
  modalCallForm2.classList.add("modal-parent--open");
  lockScroll();
})

// Закрытие модального окна
modalCallForm2.querySelector(".modal").addEventListener("click", function (event) {
  event._isClick = true
})
modalCallForm2.addEventListener("click", function (event) {
  if (event._isClick === true) return
  modalCallForm2.classList.remove("modal-parent--open");
  unlockScroll();
})

// Закрытие при нажатии на Esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalCallForm2.classList.remove("modal-parent--open")
  }
})