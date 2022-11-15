let prevScrollpos = window.pageYOffset;

// Handle Navbar
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#main-navbar").style.top = "0";
  } else {
    document.querySelector("#main-navbar").style.top = `-${
      document.querySelector("#main-navbar").clientHeight
    }px`;
  }
  prevScrollpos = currentScrollPos;
};

// window.onload = () => {
//   let banner = document.querySelector("#header-intro");
//   let mainHeight = document.querySelector("#main-navbar");
//   if (banner != null) {
//     // console.log(mainHeight.clientHeight);
//     banner.style.marginTop = `${mainHeight.clientHeight}px`;
//   }
// };

let onResizeBody = () => {
  let navbar = document.querySelector("#main-navbar");
  let primary = document.querySelector("#primary");

  if (navbar && primary) {
    primary.style.paddingTop = `${navbar.clientHeight}px`;
  }
};

// SLider
$(document).ready(() => {
  let defaultOptions = {
    infinite: true,
    lazyLoad: "ondemand",
    dots: false,
    autoPlay: true,
    autoPlaySpeed: 500,
    cssEase: "linear",
    arrows: true,
    prevArrow:
      '<div class="slick-prev position-absolute"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next position-absolute"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  };
  $(".activities-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    ...defaultOptions,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          ...defaultOptions,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          ...defaultOptions,
        },
      },
    ],
  });
});

// Back To Top
$(document).ready(function () {
  let btn = $("#back-to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

// Fetch Contents
{
  fetch("../../includes/header.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    });

  fetch("../../includes/footer.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
}

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Read more
$(document).ready(() => {
  $(".btn-vision").click(() => {
    $(".more-vision").slideToggle();
    if ($(".btn-vision").text() == "Xem Thêm") {
      $(".btn-vision").text("Rút Gọn");
    } else {
      $(".btn-vision").text("Xem Thêm");
    }
  });

  $(".btn-mission").click(() => {
    $(".more-mission").slideToggle();
    if ($(".btn-mission").text() == "Xem Thêm") {
      $(".btn-mission").text("Rút Gọn");
    } else {
      $(".btn-mission").text("Xem Thêm");
    }
  });
});
