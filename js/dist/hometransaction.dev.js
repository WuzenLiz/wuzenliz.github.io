"use strict";

var container = document.querySelector('#js-scroll');
barba.init({
  transitions: [{
    name: 'default-transition',
    leave: function leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter: function enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }],
  views: [{
    namespace: 'home',
    beforeEnter: function beforeEnter() {// do something
    },
    afterEnter: function afterEnter() {// do something
    }
  }]
});
var scroll = new LocomotiveScroll({
  el: container.querySelector('[data-scroll-container]'),
  smooth: true
}); // update the scroll after entering a page

barba.hooks.after(function () {
  scroll.update();
});