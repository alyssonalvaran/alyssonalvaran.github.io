function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

(function($) {
    "use strict";

    // Run public speaking in numbers
    const facilitator = document.getElementById("facilitator");
    const speaker = document.getElementById("speaker");
    const host = document.getElementById("host");
    const guest = document.getElementById("guest");

    animateValue(facilitator, 0, 27, 2700);
    setTimeout(function(){
        animateValue(speaker, 0, 9, 900);
        setTimeout(function(){
            animateValue(host, 0, 7, 700);
            setTimeout(function(){ animateValue(guest, 0, 2, 200); }, 700);
        }, 900);
    }, 2700);

    // Scroll to top button appear
    $('.scroll-to-top').hide();
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

})(jQuery);