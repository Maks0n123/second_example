$(document).ready(function () {
  $('.header__wrapper__burger').click(function (event) {
    $('.header__wrapper__burger,.header__wrapper__menu,.header__wrapper__burger__central-line').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__wrapper__menu__ul__li__link').click(function (event) {
    $('.header__wrapper__burger,.header__wrapper__menu,.header__wrapper__burger__central-line').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.main__wrap-directions__directions__right-part__accordion-wrap__element__inscription').click(function () {

    $(this).next().slideToggle(500);

    $(this).toggleClass('accordion-item--active');
    $(this).toggleClass('accordion-item--active-opposite');
    $('.main__wrap-directions__directions__left-part').toggleClass('left-part-fix');
    if ($(this).hasClass('accordion-item--active')) {
      $(this).removeClass('accordion-item--active-opposite');
    }
    else if ($(this).hasClass('accordion-item--active-opposite')) {
      $(this).removeClass('accordion-item--active');
    }

  });

  var time = 2,
    cc = 1;
  $(window).scroll(function () {
    $('#counter').each(function () {
      var
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
      if (cPos < topWindow + 100) {
        if (cc < 2) {
          $('.main__wrap-great-reference__great-reference__reference').toggleClass('active-reference');
          cc = cc + 2;

        }
      }
    });
  });
  $(window).on("load",function(){
    $(".preloader").delay(6000).fadeOut(400);
  });
});
var $w = $(window);
$w.on('scroll', function () {
  $('.header,.header__wrapper__logo__img,.header__wrapper__menu__ul__li__link,.header__wrapper__burger,.header__wrapper__burger__central-line').toggleClass("menu-scroll", $w.scrollTop() > 0);
}).trigger('scroll');

$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top - 60
  }, 800);
});


