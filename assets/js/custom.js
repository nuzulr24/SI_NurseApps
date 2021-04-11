$(document).ready(function () {
    var nav = $('.navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            nav.removeClass("fixed-bottom");
            nav.addClass('mt-3');
        } else {
            nav.addClass("fixed-bottom");
            nav.addClass('mt-3');
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
    document.getElementById("bottom-navigation").style.display = "block";
    var haha =document.getElementById("breadcrumb").style.display = "block";
    console.log(haha);
}

$(".carousel").swipe({

    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: "vertical"

});