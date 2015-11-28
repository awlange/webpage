//var scrollers = {
//    // clicked scroller link  // link to scroll to      // nav container that scroll to is in
//    "#scroller-home": [ "#", "#nav-home" ],
//    "#scroller-science": [ "#", "#nav-science" ],
//    "#scroller-development": [ "#", "#nav-development" ],
//    "#scroller-resume": [ "#", "#nav-resume" ],
//    "#scroller-contact": [ "#", "#nav-contact" ],
//    "#scroller-employment": [ "#resume-employment", "#nav-resume" ],
//    "#scroller-education": [ "#resume-education", "#nav-resume" ],
//    "#scroller-skills": [ "#resume-skills", "#nav-resume" ],
//    "#scroller-projects": [ "#resume-projects", "#nav-resume" ],
//    "#scroller-awards": [ "#resume-awards", "#nav-resume" ],
//    "#scroller-publications": [ "#resume-publications", "#nav-resume" ],
//    "#scroller-publications2": [ "#resume-publications", "#nav-resume" ],
//    "#scroller-electrons": [ "#science-electrons", "#nav-science" ],
//    "#scroller-dynamics": [ "#science-dynamics", "#nav-science" ],
//    "#scroller-solvent": [ "#science-solvent", "#nav-science" ],
//    "#scroller-quantum": [ "#science-quantum", "#nav-science" ],
//    "#scroller-mathworkers": [ "#development-mathworkers", "#nav-development" ],
//    "#scroller-cassandra": [ "#development-cassandra", "#nav-development" ],
//    "#scroller-genetic": [ "#development-genetic", "#nav-development" ],
//    "#scroller-scaling": [ "#development-scaling", "#nav-development" ]
//};
//
//var maskIds = [
//    "#mask-electrons", "#mask-dynamics", "#mask-solvent", "#mask-quantum",
//    "#mask-mathworkers", "#mask-cassandra", "#mask-genetic", "#mask-scaling"
//];
//
//var maskContents = [
//    "#content-science", "#content-science", "#content-science", "#content-science",
//    "#content-development", "#content-development", "#content-development", "#content-development"
//];
//
//// -------------------------------------------------
//// Main ready function
////
//$(document).ready( function(){
//
//    // Scrollers
//    for (var link in scrollers) {
//        if (scrollers.hasOwnProperty(link)) {
//            scrollTo(link);
//            scrollerClick(link);
//        }
//    }
//    $(".backToTop").click(scrollToTop);
//
//    //// Scroll mask transitions
//    //for (var i=0; i < maskIds.length; i++) {
//    //    scrollThumbnailMask(maskIds[i], maskContents[i]);
//    //}
//
//    // Modals
//    //modalHandler();
//});
//
//// -------------------------------------------------
//// Others
////
//
//function scrollTo(link) {
//    $(link).click( function(e) {
//        var goToElement = scrollers[link][0];
//        if (goToElement !== "#") {
//            $('html,body').animate({
//                scrollTop: $(goToElement).offset().top
//            }, 800);
//        }
//    });
//}
//
//var scrollToTop = function() {
//    $('html,body').animate({
//        scrollTop: 0
//    }, 800);
//};
//
////function scrollThumbnailMask(maskId, maskContent) {
////    $(window).scroll( function() {
////        var mask = $(maskId);
////        var window_y = window.pageYOffset;
////        var mask_y = mask.offset().top;
////        var buffer = 180;
////
////        if (mask_y - buffer <= window_y && window_y <= mask_y) {
////            mask.addClass("thumbnail-mask-opaque").removeClass("thumbnail-mask-transparent");
////        } else if(mask.hasClass("thumbnail-mask-opaque")) {
////            mask.removeClass("thumbnail-mask-opaque").addClass("thumbnail-mask-transparent");
////        }
////    });
////}
////
////function modalHandler() {
////    $(".modal-button").click( function() {
////        var $modal = $(".modal");
////        if ($modal.hasClass("modal-active")) {
////            $modal.removeClass("modal-active");
////            $(".modal-body").removeClass("modal-body-active");
////        } else {
////            $modal.addClass("modal-active");
////            $(".modal-body").addClass("modal-body-active");
////        }
////    });
////}
