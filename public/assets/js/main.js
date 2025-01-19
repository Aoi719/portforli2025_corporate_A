"use strict";

$(function () {
  // スムーススクロール
  $('a[href^="#"]').on("click", function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // MVスライダー
  new Splide(".splide", {
    type: "loop",
    autoplay: "auto",
    perPage: 1,
    resetProgress: false,
    pauseOnHover: false,
    arrows: false,
  }).mount();

  // トップに戻るボタン
  $(window).on("scroll", function () {
    if (500 < $(this).scrollTop()) {
      $("#to-top").addClass("is-show");
    } else {
      $("#to-top").removeClass("is-show");
    }
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    let footHeight = $(".footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $("#to-top").addClass("is-fixed");
    } else {
      $("#to-top").removeClass("is-fixed");
    }
  });
});
