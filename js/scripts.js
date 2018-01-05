$(document).ready(function() {
  //
  $(".mob-btn").on("click", function() {
    $(this).toggleClass("open");
    $(".main-header nav ul").toggleClass("show");
  });
  // search form
  $(".search-btn").on("click", function() {
    $(".search-pop-up").slideToggle();
  });
  $(".close").on("click", function() {
    $(this)
      .parent()
      .slideToggle();
  });

  // contact pop-up
  $(".pop-up").on("click", function(e) {
    $(".mob-btn").toggleClass("open");
    $(".main-header nav ul").toggleClass("show");
    e.preventDefault();
    var id = $(this).attr("href");
    $(id)
      .after('<div id="pop-up-mask"></div>')
      .fadeIn(500);
    $(id).fadeIn(800);
  });
  $(".close-pop-up").on("click", function() {
    $(this)
      .parent()
      .fadeOut(300);
    $("#pop-up-mask").remove();
  });

  // validate form
  $(".contact-us").validate({
    rules: {
      name: "required",
      phone: {
        required: true,
        number: true,
        minlength: 7
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Please enter your name",
      phone: {
        required: "Please enter a phone",
        minlength: "Your phone must consist of at least 7 characters"
      },
      email: "Please enter a valid email address"
    }
  });
});

var swiper = new Swiper(".image-slider", {
  speed: 1400,
  effect: "fade",
  autoplay: 5000,
  loop: true
});
