$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 110) {
            $(".wq-header").each(function () {
                $(this).addClass("wq-header_fixo");
            });
        } else {
            $(".wq-header").each(function () {
                $(this).removeClass("wq-header_fixo");
            });
        }
    });
    $(window).scroll();
    
    $('a[href*="#"].scroll, a[href*="#"].scroll2')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    event.preventDefault();
                    $("html, body").animate({ scrollTop: target.offset().top - 125 }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr("tabindex", "-1");
                            $target.focus();
                        }
                    });
                }
            }
        });
});
var hrefScroll;

$('.wq-instalacao-carousel').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });