$(function () {
  $('#js-hamburger-menu, .header__link').on('click', function () {
    $('.header__nav').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 100000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });