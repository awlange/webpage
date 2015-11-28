var images = {
  "thumbnail-ade": "img/ade2orbital.png"
};

$(document).ready(function() {

    // Variables
    var $nav = $('.navbar'),
        $body = $('body'),
        $window = $(window),
        navOffsetTop = $nav.offset().top;

    function init() {
        $window.on('scroll', onScroll);
        $window.on('resize', resize);
        $('a[href^="#"]').on('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash,
            menu = target;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    }

    function resize() {
        $body.removeClass('has-docked-nav');
        navOffsetTop = $nav.offset().top;
        onScroll();
    }

    function onScroll() {
        // Navbar docking
        if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
            $body.addClass('has-docked-nav');
        }
        if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
            $body.removeClass('has-docked-nav');
        }

        // Lazy loading images
        $(".thumbnail-wrapper").filter(".not-loaded").filter(function(i, el) {
            return elementInViewport(el);
        }).each(function(i, el) {
            // Let image be on screen for a minimum amount of time before loading
            var $this = $(this);
            setTimeout(function() {
                // Still on screen
                if (elementInViewport(el)) {
                    var $spinner = $this.children("div");
                    var $img = $this.children("img");
                    $spinner.addClass("hidden");
                    $img.attr("src", images[$img.attr("id")]).fadeIn("slow").removeClass("hidden");
                    $this.removeClass("not-loaded");
                }
            }, 500);
        });


    }

    function elementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    }

    init();

});