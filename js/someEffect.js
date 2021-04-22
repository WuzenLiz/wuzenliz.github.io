$(function () {
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
      endDelay: 1000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    })
    .add({ targets: ".colRGB span", color: "rgb(255,255,255)" }, 0);
});
