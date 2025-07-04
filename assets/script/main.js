//ハンバーガーメニュー
$(function () {
    $('#js-hamburger-menu, .header__link').on('click', function () {
        $('.header__nav').slideToggle(500)
        $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
});
//写真
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
//質問
$(document).ready(function () {
    $('.qa__wrapper').on('click', function () {
        const $wrapper = $(this);
        const $answer = $wrapper.find('.qa__answer');
        const $toggleImg = $wrapper.find('.qa__toggle');
        const isVisible = $answer.is(':visible');

        $answer.slideToggle(300);

        // アイコンを切り替える
        $toggleImg.attr('src', isVisible ? '/assets/image/icon_plus.png' : '/assets/image/icon_minus.png');
    });
});