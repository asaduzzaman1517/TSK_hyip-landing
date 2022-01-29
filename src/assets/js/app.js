(function ($) {
  "use strict";

  $(document).ready(function () {
    // Mobile Menu Dropdown
    const mobileNavToggler = document.querySelector(".nav--toggle");
    const body = document.querySelector("body");
    if (mobileNavToggler) {
      mobileNavToggler.addEventListener("click", function () {
        body.classList.toggle("nav-toggler");
      });
    }
    // Mobile Menu Dropdown End

    // Mobile Submenu
    $(".primary-menu__list.has-sub .primary-menu__link").on(
      "click",
      function (e) {
        e.preventDefault();
        body.classList.add("primary-submenu-toggler");
      }
    );
    $(".primary-menu__list.has-sub.active .primary-menu__link").on(
      "click",
      function (e) {
        e.preventDefault();
        body.classList.remove("primary-submenu-toggler");
      }
    );
    $(".primary-menu__list.has-sub").on("click", function () {
      $(this).toggleClass("active").siblings().removeClass("active");
    });
    // Mobile Submenu End

    //   Nice Select Inititate
    $(".custom--select").niceSelect();
    //   Nice Select End

    // Search Popup
    var bodyOvrelay = $("#body-overlay");
    var searchPopup = $("#search-popup");

    $(document).on("click", "#body-overlay", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      searchPopup.removeClass("active");
    });
    $(document).on("click", ".search--toggler", function (e) {
      e.preventDefault();
      searchPopup.addClass("active");
      bodyOvrelay.addClass("active");
    });
    // Search Popup End

    // Magnific Popup
    var magPhoto = $(".show-video");
    if (magPhoto.length) {
      magPhoto.magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        disableOn: 300,
      });
    }
    // Magnific Popup End

    // Testimonial Slider
    let testimonialSlider = $(".testimonial-slider");
    if (testimonialSlider) {
      testimonialSlider.slick({
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1599,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      });
    }
    // Testimonial Slider End

    // Client Slider
    let clientSlider = $(".client-slider");
    if (clientSlider) {
      clientSlider.slick({
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        autoplaySpeed: 1000,
        speed: 2000,
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 7,
            },
          },
        ],
      });
    }
    // Client Slider End

    // Animate the scroll to top
    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  });
})(jQuery);

// Header Fixed On Scroll
var bodySelector = document.querySelector("body");
const header = document.querySelector(".header-fixed");

if (bodySelector.contains(header)) {
  const headerTop = header.offsetTop;
  function fixHeader() {
    if (window.scrollY > headerTop) {
      document.body.classList.add("fixed-header");
    } else if (window.scrollY <= headerTop) {
      document.body.classList.remove("fixed-header");
    } else {
      document.body.classList.remove("fixed-header");
    }
  }
  $(window).on("scroll", function () {
    fixHeader();
  });
}

// Header Fixed On Scroll End
$(window).on("scroll", function () {
  var ScrollTop = $(".back-to-top");
  if ($(window).scrollTop() > 1200) {
    ScrollTop.fadeIn(1000);
  } else {
    ScrollTop.fadeOut(1000);
  }
});

$(window).on("load", function () {
  // Preloader
  var preLoder = $(".preloader");
  preLoder.fadeOut(1000);
});
