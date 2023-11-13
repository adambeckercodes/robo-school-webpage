tippy("#myToolTip", {
  content: "При наличии свободных мест",
  arrow: false,
  placement: "top-start",
  animation: "fade",
  delay: [0, 5000],
  // theme: "light",
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});