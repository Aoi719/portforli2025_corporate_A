"use strict";

$(function () {
  new Splide(".splide", {
    type: "loop",
    autoplay: "auto",
    perPage: 1,
    resetProgress: false,
    pauseOnHover: false,
    arrows: false,
  }).mount();
});
