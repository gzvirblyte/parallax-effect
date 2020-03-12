var imgOne = document.getElementById("one");

window.addEventListener("scroll", function (e) {
    var scrolled = window.pageXOffset;
    var rate = scrolled * 0.5;
    imgOne.style.transform = 'translateX(' + rate + 'px)';
})
