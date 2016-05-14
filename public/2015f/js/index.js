/**
 * pad a number with leading 0's
 * @param num
 * @param size
 * @returns {string}
 */
function pad(num, size) {
    var s = "000" + num; //assume never need more than 3 digits
    return s.substr(s.length - size);
}

(function ($) {

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        var padding = 30;
        $('.navbar-nav li a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - padding
            }, 1000, 'easeInOutExpo');
            $(".navbar-main-collapse").collapse('hide');
            event.preventDefault();
        });
        $('.page-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - padding
            }, 1000, 'easeInOutExpo');
            $(".navbar-main-collapse").collapse('hide');
            event.preventDefault();
        });
    });

    //properties correspond to indexed background images in /img/bgd
    var images = [
        {
            navbar: "orange",
            by: "Lindsay France",
            with: "University Photography"
        },
        {
            navbar: "blue",
            by: "Robert Barker",
            with: "University Photography"
        },
        {
            navbar: "purple",
            by: "Jason Koski",
            with: "University Photography"
        }
    ];

    //randomly select a background image
    var numImages = images.length;
    var index = Math.floor(Math.random() * numImages);
    var image = images[index];
    $('.intro').css({
        'background': 'url("/2015f/img/bgd/cornell_' + pad(index, 3) + '.jpg") no-repeat center center scroll',
        'background-size': 'cover'
    });
    $('.nav.navbar-nav').addClass(image.navbar);
    $('#intro .announcement').addClass(image.navbar);
    $('#cover-photo-attribution').html("Cover photo by " + image.by + "/" + image.with + "<br/>");
    

    //fade out things that have fadeOut class
    $(".fadeOut").delay(2000).fadeOut(2000, "easeInCubic");

    

})(jQuery);
