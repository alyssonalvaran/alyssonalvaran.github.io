$('.scroll-to-top').hide();
$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 300) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});