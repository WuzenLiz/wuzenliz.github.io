let container = document.querySelector('#js-scroll');
barba.init({
    transitions: [{
        name: 'default-transition',
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 0
            });
        }
    }],
    views: [{
        namespace: 'home',
        beforeEnter() {
            // do something
        },
        afterEnter() {
            // do something
        }
    },]

});

let scroll = new LocomotiveScroll({
    el: container.querySelector('[data-scroll-container]'),
    smooth: true
});

// update the scroll after entering a page
barba.hooks.after(() => {
    scroll.update();
});
