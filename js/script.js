$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger,.header__list").toggleClass('active');
        $('body').toggleClass('lock')
    });
    $(".header__link").click(function (event) {
        $(".header__burger,.header__list").removeClass('active');
        $('body').removeClass('lock')
    });
});

(function () {
    const header = document.querySelector('.header__nav');
    const list = document.querySelector('.header__list')
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            list.classList.add('scroll');
        } else {
            header.classList.remove('header_active');
            list.classList.remove('scroll')
        }
    };
}());