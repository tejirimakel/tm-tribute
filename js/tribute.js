// HTML document is loaded
$(window).on("load", function(){     
 "use strict";

  // var preloader
  var loader = $('.preloader');
  var bgpreloader = $('.bg-preloader');

  loader.fadeOut('slow', function() { 
 "use strict";

 bgpreloader.fadeOut(1500);

 // animated transition & scroll onStep
 onStep();
 
 // stick navbar
 navdefault.sticky(); 
 
 // auto height
 $('.box').matchHeight();

 // mobile icon
    $(".navbar-toggle").on("click", function() {
      menumobile.toggleClass('menu-show');
      navdefault.toggleClass('fullHeight');
    });
  
});
// end function
});
// HTML document is loaded end

