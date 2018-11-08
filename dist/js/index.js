window.onload = function () {

    // ----------------------Cursor----------------------

    var kinet = new Kinet({
        acceleration: 0.06,
        friction: 0.28,
        names: ["x", "y"],
    });

    // select circle element
    var circle = document.querySelector('.cursor-follow');

    // set handler on kinet tick event
    kinet.on('tick', function (instances) {
        circle.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
    });

    // call kinet animate method on mousemove
    document.addEventListener('mousemove', function (event) {
        kinet.animate('x', event.clientX - window.innerWidth / 2);
        kinet.animate('y', event.clientY - window.innerHeight / 2);
    });

    // ----------------------Preloader----------------------

    // splitter
    wrapCharacters($('.js-splited'));

    let tlPreloader = new TimelineMax();
    tlPreloader.staggerFromTo('.preloader_logo span', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 1}, 0.1);

    tlPreloader.to('.preloader_logo', 1, {y: 100, opacity: 0, ease: Power2.easeInOut, delay: 1});

    // overlay
    tlPreloader.to('.preloader', 0.6, {top: "100%", ease: Power2.easeInOut}, "-=0.5");
    tlPreloader.to('.overlay', 1.1, {top: "100%", ease: Power2.easeInOut}, "-=0.5");

    // ----------------------Background----------------------

    let tlBg = new TimelineMax();
    tlBg.fromTo('.background_right', 1.2, {width: "100%"}, {width: "50%", ease: Power2.easeInOut}, 4.5);

    // ----------------------Elements----------------------

    let tlEl = new TimelineMax();

    // main-image
    tlEl.from('.content_main-image', 1.2, {x: -170, ease: Power2.easeInOut}, 4.6);
    tlEl.to('.main-image_overlay', 1, {x: "100%", ease: Power2.easeInOut}, 4.6);

    // slide-block
    tlEl.from('.slide-block', 0.9, {x: 180, ease: Power2.easeInOut}, 4.8);

    // blog
    // tlEl.from('.blog_posts', 1, {x: 120, ease: Power2.easeInOut}, 4.6);

    // posts
    tlEl.staggerFrom('.blog_posts .post', 0.8, { y: 100, opacity: 0}, 0.15, "-=0.8");

    // headings
    tlEl.staggerFrom('.content_head-text', 1, { y: 100, opacity: 0}, 0.1, 6);

    

}
