document
  .getElementsByClassName("category__list")[0]
  .classList.add("category__active");

$(".category__list").click(function () {
  $(".category__list.category__active").removeClass("category__active");
  $(this).addClass("category__active");
});

$(".category__item").on("click", function () {
  console.log(Number($(this).val()));
});
