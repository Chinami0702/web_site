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
  $(document).ready(function () {
  $('.qa__toggle').on('click', function () {
    const $answer = $(this).closest('.qa__box').find('.qa__answer');
    const isVisible = $answer.is(':visible');

    $answer.slideToggle(300);
    $(this).text(isVisible ? '＋' : '−');
  });
});