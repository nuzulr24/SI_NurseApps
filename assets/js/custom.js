$(document).ready(function () {
    var nav = $('.navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 125) {
            nav.removeClass("fixed-bottom");
        } else {
            nav.addClass("fixed-bottom");
        }
    });
});

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
}

$(".carousel").swipe({

    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: "vertical"

});