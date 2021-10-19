"use strict";

// preloader start
$(window).on("load", function () {
  $(".preloader")
    .delay(500)
    .animate(
      {
        opacity: "0",
      },
      500,
      function () {
        $(".preloader").css("display", "none");
      }
    );
});
// preloader end



// scroll-top btn start
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $(".scroll-top").addClass("active");
  } else {
    $(".scroll-top").removeClass("active");
  }
});

$(".scroll-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// scroll-top btn end

// slick slider

$(document).ready(function(){
  $('.banner-slider').slick({
    prevArrow: '<div class="prev"><i class="fas fa-arrow-left"></i></div>',
    nextArrow: '<div class="next"><i class="fas fa-arrow-right"></i></div>'
  });
});


// header-section
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 150) {
    $(".header-section").addClass("active");
  } else {
    $(".header-section").removeClass("active");
  }
})

// aos animation
AOS.init();