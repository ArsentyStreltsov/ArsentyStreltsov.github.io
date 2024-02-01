document.addEventListener('DOMContentLoaded', function () {
  let headerHeight = document.querySelector('header').offsetHeight;
  
window.addEventListener('resize', function () {
  // Обновляем значение headerHeight при изменении размеров окна
  headerHeight = document.querySelector('header').offsetHeight;
  });

const navLinks = document.querySelectorAll('.nav-link');

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





// gallery
const first_swiper = new Swiper("#first_swiper", {
  loop: true,
  freeMode: true,

  navigation: {
    prevEl: "#first_swiper_prev",
    nextEl: "#first_swiper_next"
  },

  breakpoints: {
    1110: {
      slidesPerView: 3,
    },  
    992: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    }

  }
});

const second_and_third_swiper = new Swiper("#second_and_third_swiper", {
  loop: true,
  freeMode: true,

  slidesPerView: 1,


  navigation: {
    prevEl: "#second_and_third_swiper_prev",
    nextEl: "#second_and_third_swiper_next"
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
    1110: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    }

  }
});






// Модальное окно
const callFromBtn = document.getElementById("call-form")
const modalCallForm = document.getElementById("modal-call-form")

// Открытие модального окна
callFromBtn.addEventListener("click", function () {
  modalCallForm.classList.add("modal-parent--open")
})

// Закрытие модального окна
modalCallForm.querySelector(".modal").addEventListener("click", function (event) {
  event._isClick = true
})
modalCallForm.addEventListener("click", function (event) {
  if (event._isClick === true) return
  modalCallForm.classList.remove("modal-parent--open")
})

// Закрытие при нажатии на Esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open")
  }
})


// Модальное окно #2
const callFromBtn_2 = document.getElementById("call-form_2")
const modalCallForm_2 = document.getElementById("modal-call-form_2")

// Открытие модального окна
callFromBtn_2.addEventListener("click", function () {
  modalCallForm_2.classList.add("modal-parent_2--open")
})

// Закрытие модального окна
modalCallForm_2.querySelector(".modal_2").addEventListener("click", function (event) {
  event._isClick = true
})
modalCallForm_2.addEventListener("click", function (event) {
  if (event._isClick === true) return
  modalCallForm_2.classList.remove("modal-parent_2--open")
})

// Закрытие при нажатии на Esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalCallForm_2.classList.remove("modal-parent_2--open")
  }
})