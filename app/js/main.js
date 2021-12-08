new WOW().init();
function slowScroll(id) {
    $("html, body").animate({
        scrollTop: $(id).offset().top - 50
    }, 500);
    return false;
}