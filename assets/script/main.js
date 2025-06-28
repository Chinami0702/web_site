$(function () {
  $('#js-hamburger-menu, .header__link').on('click', function () {
    $('.header__nav').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});