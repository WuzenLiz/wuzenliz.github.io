$(function () {
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
  });
  var subScene = document.getElementById("lines");
  var parallaxInstance2 = new Parallax(subScene, {
    relativeInput: true,
    hoverOnly: true,
  });
  var typed = new Typed("#typed", {
    strings: [
      "你好!",
      "Hello!",
      "Saluton!",
      "Hallo!",
      "Bonjour!",
      " Buongiorno!",
      "こんにちは!",
      " 안영하세요!",
      " Сайн уу!",
      "Olá!",
      "Привет!",
      "¡Hola!",
      "สวัสดีคะ!",
      "Swazdo-lah!",
      "Chào mừng!",
    ],
    typeSpeed: 70,
    shuffle: true,
    showCursor: false,
    loop: true,
    backDelay: 1500,
  });
  var colRGB = anime
    .timeline({
      Delay: 1000,
      duration: 2000,
      easing: "linear",
      direction: "alternate",
      loop: true,
    })
    .add({ targets: ".colRGB span", color: "rgb(255,255,255)" }, 0)
    .add(
      {
        targets: ".titleContainer span.active",
        color: "rgb(255,255,255)",
      },
      0
    );
  $(".titleContainer")
    .find("span")
    .hover(
      function () {
        $(this).addClass("hover");
      },
      function () {
        $(this).removeClass("hover");
      }
    );
  var logoAni = anime({
    targets: ".lgContainer .lines path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInExpo",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
    endDelay: 1000,
  });
  var infoAni = anime({
    targets: document.getElementById("infName"),
    delay: 500,
    translateX: [-1000, 0],
    direction: "normal",
    easing: "easeOutElastic(1, .8)",
  });
  var infoAni = anime({
    targets: document.getElementById("titleContainer"),
    delay: 700,
    translateX: [-1000, 0],
    direction: "normal",
    easing: "easeOutElastic(1, .8)",
  });
});
