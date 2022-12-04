{
    !function (e) {
        "use strict";
        var n = n || window.particlesJS;
        e(document).ready(function () {
            n("bg-animation", {
                particles: {
                    number: {value: 250, density: {enable: !0, value_area: 900}},
                    color: {value: "#38ba94"},
                    shape: {type: "circle", stroke: {width: 0, color: "#000000"}, polygon: {nb_sides: 5}},
                    opacity: {value: .5, random: !1, anim: {enable: !1, speed: 1, opacity_min: .1, sync: !1}},
                    size: {value: 2, random: !0, anim: {enable: !1, speed: 20, size_min: .1, sync: !1}},
                    line_linked: {enable: 0, distance: 150, color: "#38ba94", opacity: .4, width: 1},
                    move: {
                        enable: !0,
                        speed: 1,
                        direction: "top",
                        random: !1,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {enable: !1, rotateX: 600, rotateY: 1200}
                    }
                },
                interactivity: {
                    detect_on: "window",
                    events: {onhover: {enable: !0, mode: "bubble"}, onclick: {enable: !1, mode: "push"}, resize: !0},
                    modes: {
                        grab: {distance: 150, line_linked: {opacity: 0}},
                        bubble: {distance: 400, size: 6, duration: 2, opacity: 8, speed: 3},
                        repulse: {distance: 200, duration: .4},
                        push: {particles_nb: 4},
                        remove: {particles_nb: 2}
                    }
                },
                retina_detect: !0
            })
        })
    }(jQuery);

}
