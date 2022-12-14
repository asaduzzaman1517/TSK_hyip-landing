(function ($) {
	"use strict";

	$(document).ready(function () {
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

		// Animate the scroll to top
		$(".back-to-top").on("click", function (event) {
			event.preventDefault();
			$("html, body").animate(
				{
					scrollTop: 0,
				},
				300
			);
		});

		// Mobile Submenu
		let primaryMenu = $(".has-sub > .primary-menu__link");
		let primarySubMenu = $(".primary-menu__sub");
		if (primaryMenu || primarySubMenu) {
			primaryMenu.on("click", function (e) {
				e.preventDefault();
				if (parseInt(screenSize) < parseInt(992)) {
					$(this).toggleClass("active").siblings(primarySubMenu).slideToggle();
				}
			});
		}
		// Mobile Submenu End

		// Custom Dropdown
		let customDropdown = $('[data-set="custom-dropdown"]');
		let dropdownContent = $(".custom-dropdown__content");
		if (customDropdown || dropdownContent) {
			customDropdown.each(function () {
				$(this).on("click", function (e) {
					e.stopPropagation();
					$("body").toggleClass("custom-dropdown-open");
					dropdownContent.toggleClass("is-open");
				});
			});
			dropdownContent.each(function () {
				$(this).on("click", function (e) {
					e.stopPropagation();
				});
			});
			$(document).on("click", function () {
				$("body").removeClass("custom-dropdown-open");
				dropdownContent.removeClass("is-open");
			});
		}
		// Custom Dropdown End

		// Feedback Slider
		let feedback = $(".feedback-slider");
		if (feedback) {
			feedback.slick({
				mobileFirst: true,
				slidesToShow: 1,
				prevArrow:
					'<button type="button" class="feedback-slider__arrow feedback-slider__arrow-prev"><i class="las la-angle-left"></i></button>',
				nextArrow:
					'<button type="button" class="feedback-slider__arrow feedback-slider__arrow-next"><i class="las la-angle-right"></i></button>',
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 1399,
						settings: {
							slidesToShow: 3,
						},
					},
				],
			});
		}
		// Feedback Slider End
	});
})(jQuery);

// Wow.js initiate
new WOW().init();
// Wow.js initiate  End

// Smooth Scroll
butter.init({
	wrapperId: "butter",
});
// Smooth Scroll End

// Header Fixed On Scroll
var bodySelector = document.querySelector("body");
const header = document.querySelector(".header-primary--fixed");

if (bodySelector.contains(header)) {
	const headerTop = header.offsetTop;

	function fixHeader() {
		if (window.scrollY >= headerTop) {
			document.body.classList.add("fixed-header");
		} else if (window.scrollY < headerTop) {
			document.body.classList.remove("fixed-header");
		} else {
			document.body.classList.remove("fixed-header");
		}
	}
	$(window).on("scroll", function () {
		fixHeader();
		if (window.scrollY == 0) {
			document.body.classList.remove("fixed-header");
		}
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

// Screen Size Counting
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
	screenSize = window.innerWidth;
});
// Screen Size Counting End
