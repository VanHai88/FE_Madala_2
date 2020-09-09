// Slider Share Product

$(document).ready(function () {
  $(".slider__feedback-control").slick({
    accessibility: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
});

// Slider Show Product

$(".product__show-control").slick({
  slidesToShow: 6,
  infinite: true,
  accessibility: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots: false,
        draggable: true,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        dots: false,
        draggable: true,
        arrows: false,
      },
    },
  ],
});

$(".slick-prev").click(function () {
  $(".product__show-item").each(function (item) {
    $(this).removeClass("item__active");
  });
  $(".product__show-control .slick-active:first").addClass("item__active");
  $(".product__show-control .slick-active:last").addClass("item__active");
});

$(".slick-next").click(function () {
  $(".product__show-item").each(function (item) {
    $(this).removeClass("item__active");
  });

  $(".product__show-control .slick-active:first").addClass("item__active");
  $(".product__show-control .slick-active:last").addClass("item__active");
});

$(".slick-active:first").addClass("item__active");
$(".slick-active:last").addClass("item__active");

$(window).resize(function () {
  var w = $("body").width();
  w < 992
    ? $(".product__show-control").addClass("container")
    : $(".product__show-control").removeClass("container");
});

// Slider contact

$(".contact__list-control").slick({
  slidesToShow: 6,
  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        dots: false,
        draggable: true,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        dots: false,
        draggable: true,
        arrows: false,
      },
    },
  ],
});
