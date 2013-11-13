var navs = {
  "#nav-home": "#content-home",
  "#nav-resume": "#content-resume",
  "#nav-science": "#content-science",
  "#nav-development": "#content-development",
  "#nav-contact": "#content-contact"
};
var contents = {
  "#content-home": 0,
  "#content-science": 1,
  "#content-development": 2,
  "#content-resume": 3,
  "#content-contact": 4
};
var heights = {
  "#content-home": "content-home-height",
  "#content-resume": "content-resume-height",
  "#content-science": "content-science-height",
  "#content-development": "content-development-height",
  "#content-contact": "content-contact-height"
};
var scrollers = {
  // clicked scroller link  // link to scroll to      // nav container that scroll to is in 
  "#scroller-employment": [ "#resume-employment", "#nav-resume" ],
  "#scroller-education": [ "#resume-education", "#nav-resume" ],
  "#scroller-skills": [ "#resume-skills", "#nav-resume" ],
  "#scroller-awards": [ "#resume-awards", "#nav-resume" ],
  "#scroller-publications": [ "#resume-publications", "#nav-resume" ],
  // "#scroller-interests": [ "#science-interests", "#nav-science" ],
  // "#scroller-highlights": [ "#science-highlights", "#nav-science" ],
  "#scroller-publications-science": [ "#resume-publications", "#nav-resume" ]
};


// -------------------------------------------------
// Main ready function
//
$(document).ready( function(){
  for (var nav in navs) {
    navClick(nav);
  }
  for (var link in scrollers) {
  	scrollTo(link);
  }
  setTimeout( function() { introAnimation(); }, 500);
});

// -------------------------------------------------
// Others
//

function navClick(navClick) {	
  $(navClick).click( function(e) { 	 	
    // Prevent jumping to anchor (top of page) when clicked. e is for event.
  	switchPage(navClick, true);
  	e.preventDefault();
  	return false;
  });
};

function switchPage(navClick, wiggleOn) {	
  	var contentClick = navs[navClick];
    var contentCurrent = getCurrentContent(); 	
  	var contentChanged = false;
  	
  	if (contentClick != contentCurrent) {	
  	  contentChanged = true;
  	  var navCurrent = getCurrentNav();	
  	  
  	  // change height of page wrapper to the clicked page height
  	  contentHeightTransition(contentCurrent, contentClick);
  	  
  	  // clear previous moves and/or positioning
  	  clearMoves(contentClick);
  	  clearMoves(contentCurrent);
  	  clearSets(contentCurrent);
      clearSets(contentClick);
      
      // check the pages relative positioning, and then move pages and navs accordingly
  	  if (isALeftOfB(contentCurrent, contentClick)) {
        $(contentCurrent).addClass("content-moveToLeft").removeClass("content-current");
        $(contentClick).addClass("content-moveFromRight").addClass("content-current");
        navTransition(navCurrent, navClick);
      }
      else {
        $(contentCurrent).addClass("content-moveToRight").removeClass("content-current");
        $(contentClick).addClass("content-moveFromLeft").addClass("content-current"); 
        navTransition(navCurrent, navClick);	
      }            
   } else if (wiggleOn) {
     animateIcon(navClick, "wiggle");
   }
   return contentChanged;
}

function getCurrentContent() {
  for (var content in contents) {
  	if ($(content).hasClass("content-current")) {
      return content;
  	}
  }	 
  return "#none";	
}

function getCurrentNav() {
  for (var nav in navs) {
  	if ($(nav).hasClass("nav-current")) {
      return nav;
  	}
  }	 
  return "#none";	
}


function contentHeightTransition(contentFrom, contentTo) {
  $("#content-wrapper").removeClass(heights[contentFrom]);
  $("#content-wrapper").addClass(heights[contentTo]);
};

function isALeftOfB(A, B) {
  return contents[A] < contents[B];
}
function isARightOfB(A, B) {
  return contents[A] > contents[B];
}

function clearSets(content) {
  var setClasses = ["setToLeft", "setToCenter", "setToRight"]; 
  for (var i in setClasses) {
    if ($(content).hasClass(setClasses[i])) {
  	  $(content).removeClass(setClasses[i]);
    }
  }	
}

function clearMoves(content) {
  var moveClasses = [
    "content-moveToLeft", 
    "content-moveToCenter", 
    "content-moveToRight",
    "content-moveFromLeft",
    "content-moveFromRight"
  ]; 
  for (var i in moveClasses) {
    if ($(content).hasClass(moveClasses[i])) {
  	  $(content).removeClass(moveClasses[i]);
    }
  }	
}

function navTransition(navFrom, navTo) {
  $(navFrom).removeClass("nav-current");
  $(navTo).addClass("nav-current");
  animateIcon(navTo, "bounce");
}

function animateIcon(nav, animateClass) {
  $(nav).addClass(animateClass);	
  setTimeout(function() {
  	$(nav).removeClass(animateClass);
  }, 650);
}	

function introAnimation() {
  var delay = 80;
  setTimeout(function() { animateIcon("#nav-home", "bounce"); }, 0*delay);
  setTimeout(function() { animateIcon("#nav-science", "bounce"); }, 1*delay);
  setTimeout(function() { animateIcon("#nav-development", "bounce"); }, 2*delay);
    setTimeout(function() { animateIcon("#nav-resume", "bounce"); }, 3*delay);
  setTimeout(function() { animateIcon("#nav-contact", "bounce"); }, 4*delay);
}


function scrollTo(link) {
  $(link).click( function(e) {
  	// First make sure we are on the right displayed page
  	var navClick = scrollers[link][1];
  	var doDelay = switchPage(navClick, false);
  	var delay = doDelay ? 200 : 0;
  	// Then scroll
  	var goToElement = scrollers[link][0]; 
  	console.log(navClick, doDelay, goToElement);
    $('html,body').animate({
    	scrollTop: $(goToElement).offset().top
    }, 1000);
  });
};

function scrollToTop() {
  $('html,body').animate({scrollTop: 0});
};

