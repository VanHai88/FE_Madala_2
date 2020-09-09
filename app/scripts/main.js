var isCheckDropdown = true;

var isCheckCart = true;

$(".nav__toggle").click(function () {
  $(".nav__list").slideToggle();
});
$(".nav__toggle").on("click", function () {
  this.classList.toggle("active");
});

var w;
$(window).resize(function () {
  w = $("body").width();
  if (w > 992) {
    $(".nav__list").css("display", "flex");
  } else {
    $(".nav__list").css("display", "none");
    $(".nav__toggle").removeClass("active");
  }
});

// -----------------------------------------------

//users use the slider to view product details

let thumbnails = document.getElementsByClassName("thumbnail-js");
let activeImages = document.getElementsByClassName("thumbnail__active");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", function () {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove("thumbnail__active");
    }

    this.classList.add("thumbnail__active");
    document.getElementById("featured").src = this.src;
  });
}

let buttonTop = document.getElementById("slide-top-js");
let buttonBottom = document.getElementById("slide-bottom-js");

buttonTop.addEventListener("click", function () {
  document.getElementById("slider-js").scrollTop -= 331;
});

buttonBottom.addEventListener("click", function () {
  document.getElementById("slider-js").scrollTop += 331;
});

// event when clicking on the social network icon

function eventClickIcon(button, count) {
  document.getElementsByClassName(button)[0].onclick = function () {
    const allCount = document.getElementsByClassName("count");
    for (let i = 0; i < allCount.length; i++) {
      document.getElementsByClassName("count")[i].style.display = "none";
    }

    document.getElementsByClassName(count)[0].style.display = "block";

    setTimeout(function () {
      document.getElementsByClassName(count)[0].style.display = "none";
    }, 2000);
  };
}

eventClickIcon("btn__facebook-js", "count--facebook-js");
eventClickIcon("btn__tweet-js", "count--tweet-js");
eventClickIcon("btn__google-js ", "count--google-js");

// tab overview

let overview__item = document.getElementsByClassName("overview__item-js");
let overview__block = document.getElementsByClassName("overview__block");

for (let i = 0; i < overview__item.length; i++) {
  overview__item[i].onclick = function () {
    let title_active = document.querySelector(".overview__active");
    let block_active = document.querySelectorAll(".overview__active")[1];

    title_active.classList.remove("overview__active");
    block_active.classList.remove("overview__active");
    this.classList.add("overview__active");
    overview__block[i].classList.add("overview__active");
  };
}
