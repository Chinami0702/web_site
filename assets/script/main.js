/*ハンバーガーメニュー*/
$(function () {
    $('#js-hamburger-menu, .header__link').on('click', function () {
        $('.header__nav').slideToggle(500)
        $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
});

/*写真*/
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 100000,
  },
  spaceBetween: 20, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
/*質問*/
$(document).ready(function () {
  $('.qa__wrapper').on('click', function () {
    const $wrapper = $(this);
    const $answer = $wrapper.find('.qa__answer');

    $answer.slideToggle(300);
    $wrapper.toggleClass('active');
  });
});