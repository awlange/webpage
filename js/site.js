var images = {
    "thumbnail-ade": "img/ade2orbital.png",
    "thumbnail-DESMO": "img/eqDESMOfull.png",
    "thumbnail-FMO": "img/FMO-MS-RMD_TOC.png",
    "thumbnail-qchem": "img/Qchem-logo.gif",
    "thumbnail-mathworkers": "img/mathworkers.png",
    "thumbnail-cassandra": "img/cassandra.png",
    "thumbnail-genetic": "img/genetic.png",
    "thumbnail-scaling": "img/scalingGraph.png"
};

$(document).ready(function() {

    // Variables
    var $nav = $('.navbar'),
        $body = $('body'),
        $window = $(window),
        $flask = $('#flask'),
        navOffsetTop = $nav.offset().top;

    function init() {
        $window.on('scroll', onScroll);
        $window.on('resize', resize);
        $('a[href^="#"]').on('click', smoothScroll);
        $flask.on('click', tipFlask);
    }

    function smoothScroll(e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash,
            menu = target;
        var $target = $(target);

        // log nav click
        $.ajax({
            type: "GET",
            url: "/nav?n=" + target.substring(1, target.length)
        });

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 10, 'swing', function() {
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
                    $img.attr("src", images[$img.attr("id")]).load(function() {
                        // Remove spinner, fade in image once loaded
                        $spinner.addClass("hidden");
                        $img.fadeIn("slow").removeClass("hidden");
                    });
                    $this.removeClass("not-loaded");
                }
            }, 50); // impression time
        });
    }

    function elementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function tipFlask() {
        $flask.addClass("tip");
        setTimeout(function() {
            $flask.removeClass("tip");
        }, 1100);
        // log flask click
        $.ajax({
            type: "GET",
            url: "/nav?n=flask"
        });
    }

    init();

});