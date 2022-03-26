'use strict';

$(function() {
	/*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

	page.config({
		/*
    |--------------------------------------------------------------------------
    | Disable AOS on mobile
    |--------------------------------------------------------------------------
    |
    | If true, the Animate On Scroll animations don't run on mobile devices.
    |
    */

		disableAOSonMobile: true,

		/*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

		smoothScroll: true,
	});

	/*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */





// active navbar links
// let typed = new Typed(".type", {
// 	strings: [ "frontend developer","web designer", "php developer"],
// 	typeSpeed: 80,
// 	backSpeed: 60,
// 	loop: true,
// });
// typed back words
// var swiper = new Swiper(".swiper-container", {
// 	loop: true,
// 	autoplay: true,
// 	effect: "coverflow",
// 	grabCursor: true,
// 	centeredSlides: true,
// 	slidesPerView: "auto",
// 	coverflowEffect: {
// 		rotate: 50,
// 		stretch: 0,
// 		depth: 100,
// 		modifier: 1,
// 		slideShadows: true,
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// });
// swipper silder



// new WOW().init();
// animate.css

$(window).scroll(function () {
	let scrollTop = $(window).scrollTop();
	if (scrollTop > 800) {
		$("#btnUp").fadeIn(500);
	} else {
		$("#btnUp").fadeOut(500);
	}
});
$("#btnUp").click(function () {
	$("body,html").animate({ scrollTop: 0 }, 1500);
});
// btn-up function

$(document).ready(function () {
	$("#loading").fadeOut(2500, function () {
		$("body").css("overflow", "auto");
	});
});
// loading screen

// $(document).ready(function ($) {
// 	$(".counter").counterUp({
// 		delay: 10,
// 		time: 2000,
// 	});
// });
// // counter




});

