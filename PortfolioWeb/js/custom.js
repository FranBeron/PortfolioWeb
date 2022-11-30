(function ($) {
  "use strict";
  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
  carousels();

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);

//Get the button

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('#btn-back-to-top').fadeIn();
    } else {
      $('#btn-back-to-top').fadeOut();
    }
  });

  $('#btn-back-to-top').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});