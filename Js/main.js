TweenMax.from(".c-img", 2, {
    delay: .2,
    width: "0%",
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".o-text", 2, {
    delay: 0.9,
    y: 50,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from("#music", 2, {
    delay: 1,
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from("#drink", 2, {
    delay: 1.5,
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from("#event", 2, {
    delay: 2,
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".c-logo", 2, {
    delay: 4,
    y: -50,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".c-navigation", 2, {
    delay: 5,
    x: -100,
    opacity: 0,
    ease: Expo.easeInOut
});

function hoverImages(content, object) {
    document.getElementById(content).onmouseover = function () { mouseOver() };
    document.getElementById(content).onmouseout = function () { mouseOut() };

    function mouseOver() {
        document.getElementById(object).style.transform = "scale(1.2)";
    }

    function mouseOut() {
        document.getElementById(object).style.transform = "scale(1)";
    }
};

hoverImages('c-music', 'music');
hoverImages('c-drink', 'drink');
hoverImages('c-event', 'event');