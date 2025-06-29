$(function () {
  $('#js-hamburger-menu, .header__link').on('click', function () {
    $('.header__nav').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 1000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });