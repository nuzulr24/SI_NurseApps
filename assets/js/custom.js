$(document).ready(function(){
    var nav = $('.navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 125) {
            nav.removeClass("fixed-bottom");
        } else {
            nav.addClass("fixed-bottom");
        }
    });
});