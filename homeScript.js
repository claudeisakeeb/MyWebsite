$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $("#banner").height();
    var viewPortSize = $(window).height();

    var triggerAt = 50;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('#skillblocks').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});
