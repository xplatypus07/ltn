

/* LazyLoad Functions ------
$(document).ready(function(){
  $("img.lazy").lazyload({ 
    effect : "fadeIn"
  });  
}); // end document ready
*/

/* ==== fade to black on scroll effect - parallax_foot section ==== */

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.header-overlay').css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.65) + 0.35;
          
      return opacity;
    }
  });
  });


/*=== wow ===*/

$(document).ready(function(){ 
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       75,
       /* callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }*/
      }
    );
    wow.init();   
});

/*====== Readmore.js ======*/

$(document).ready(function(){ 
    $('#info').readmore({
      //moreLink: '<a href="#">Usage, examples, and options</a>',
      collapsedHeight: 300,
		embedCSS: false,
      afterToggle: function(trigger, element, expanded) {
        if(! expanded) { // The "Close" link was clicked
          $('html, body').animate({scrollTop: element.offset().top}, {duration: 100});
        }
      }
    });

    $('article').readmore({speed: 600});
});

/*mobile detect*/
$(document).ready(function(){
 //var mobile = (/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())); 
 var mobile = (/android|webos|iphone|ipad|ipod|blackberry|mini|windows phone|iemobile|iris|kindle|opera mini/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) { 
		 //alert("MOBILE DEVICE!!");
		 $('.iframe_foot_last').css('display', 'none'); // OR you can use $('.navWrap').hide();
		 $('.iframe_foot_line').css('display', 'inline-block');
		 
		 $('.c19_intro, .ci_intro, .lp_intro, .lr_intro, .rzs_intro, .sa_intro').css('background-attachment', 'local');
		 $('.c19_intro, .ci_intro, .lp_intro, .lr_intro, .rzs_intro, .sa_intro').css('height', '60%');
    } 
    else 
    { 
       //alert("NOT A MOBILE DEVICE!!"); 
    }
});