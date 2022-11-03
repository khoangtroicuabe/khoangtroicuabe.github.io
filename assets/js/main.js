let prevScrollpos = window.pageYOffset;

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

window.onload = () => {
  let banner =  document.querySelector('#hero-banner');
  banner.style.marginTop = `${
    document.querySelector("#main-navbar").clientHeight
  }px`;
}

var acc = document.querySelectorAll(".accordion");
var accIndx;
for (accIndx = 0; accIndx < acc.length; accIndx++) {
  acc[accIndx].addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("rotate-down");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let onResizeBody = () => {
  let navbar = document.querySelector("#main-navbar");
  let primary = document.querySelector("#primary");

  if (navbar && primary) {
    primary.style.paddingTop = `${navbar.clientHeight}px`;
  }
};

$(document).ready(() => {
  let defaultOptions = {
    infinite: true,
    lazyLoad: "ondemand",
    dots: false,
    autoPlay: true,
    autoPlaySpeed: 500,
      cssEase: "linear",
      arrows: false
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          ...defaultOptions,
        },
      },
    ],
  });
});
