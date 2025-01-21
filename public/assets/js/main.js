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

  // SPハンバーガーメニュー
  let spBp = 576;
  let headerNav = $(".header__nav");
  let hMenuBtn = $(".header__hamburger-button");
  let isMenuOpen = false;
  hMenuBtn.on("click", function () {
    const $this = $(this);
    isMenuOpen = !isMenuOpen;
    $this.toggleClass("is-open");
    $this.closest(".header__hamburger").siblings(".header__nav").slideToggle();
    if ($this.attr("aria-expanded") === "false") {
      $this.attr("aria-expanded", "true");
    } else {
      $this.attr("aria-expanded", "false");
    }
  });
  $(window).on("resize", function () {
    if ($(window).width() >= spBp) {
      headerNav.show();
    } else {
      if (isMenuOpen) {
        headerNav.show();
      } else {
        headerNav.hide();
      }
    }
  });

  // matchHeight
  $(".mh").matchHeight();

  // MVスライダー
  if ($(".splide").length) {
    new Splide(".splide", {
      type: "loop",
      autoplay: "auto",
      perPage: 1,
      resetProgress: false,
      pauseOnHover: false,
      arrows: false,
    }).mount();
  }

  // トップに戻るボタン
  $(window).on("scroll", function () {
    if (500 < $(this).scrollTop()) {
      $("#to-top").addClass("is-show");
    } else {
      $("#to-top").removeClass("is-show");
    }
    let scrollHeight = $(document).height();
    let scrollPosition = window.innerHeight + $(window).scrollTop();
    let footHeight = $(".footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $("#to-top").addClass("is-fixed");
    } else {
      $("#to-top").removeClass("is-fixed");
    }
  });
});
