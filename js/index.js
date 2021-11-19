// Fullscreen Background
$(document).ready(function($){
 // Defining a function to set size for #hero
  function fullscreen(){
      jQuery('.module_full_bg').css({
          width: jQuery(window).width(),
          height: jQuery(window).height()
      });
  }

  fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
    fullscreen();
    });

});

/*=== Menu ===*/

$(window).on("scroll", function() {
  if($(window).scrollTop() > 100) {
      $("#header, #parent_1, nav a, .nome, .logo_menu, .menu-container").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $("#header, #parent_1, nav a, .nome, .logo_menu, .menu-container").removeClass("active");
  }
});

$(document).ready(function(){
  $('.menu-toggle').on('click', function(){
    $('.menu').toggleClass('active');
    $('.menu-list, .menu-container').toggleClass('active');
    $('.menu-container').addClass('active');
  });
	//close menu from item '.menu-container' and background
  $('.menu-container').on('click', function(){
	  $(".menu-toggle").click();
    //$(".menu-container").removeClass("active");
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

/* ==== linea_2 appearing form hidden ==== */
$(document).ready(function () {
  // Hide the div
  $(".linea_2").hide();
  // Show the div after 5s
  $(".linea_2").delay(4000).fadeIn(600);
});

/*===== OnePageNav ======*/
$(document).ready(function() {
  $("#navmenu").onePageNav();
});

/* =========== twenty twenty ======*/
$(document).ready(function() {
  $(".comparison-slider").twentytwenty();
});

/* ColorBox */
$(document).ready(function() {
  $(".iframe").colorbox({
    iframe: true,
    width: true,
    height: "100%",
    fixed: true,
  });
});

/*
$(document).on('cbox_open',function(){
  $(document.body).css('overflow','hidden');
});
$(document).on('cbox_closed',function(){
  $(document.body).css('overflow','scroll');
});*/

/* Block body scrolling when iframe/modal open */
$(document).bind('cbox_open', function() {
  $('html').addClass("noScrollSimple");
}).bind('cbox_cleanup', function() {
  $('html').removeClass("noScrollSimple");
});


/*=== down arrow function ===*/

$(document).ready(function() {
  $(".scrolldown").click(function() {
    $('html, body').animate({
      scrollTop: $('#start').offset().top - 25
    },600);
  return false;
  });
});

/*=== scroll up button ===*/

$(document).ready(function () {
    $('.scrollup, .child_3').click(function () {
      $("html, body").animate({
        scrollTop: -20
      }, 600);
      return false;
    });
});

/* ==== owl carousel ==== */

$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    responsiveClass:true,
    responsive:{
    0:{
    items:1,
    margin:200,
    stagePadding: 15,
    nav:false
    },
    600:{
    items:2,
    stagePadding: 12,
    nav:false
    },
    1100:{
    items:4,
    margin:100,
    nav:false,
    loop:false
    }
    }
  });
});

/* ==== cookie policy ====*/

$(document).ready(function(){
$.cookieBar({
  top: true,
  acceptOnScroll: 100
  });
});

/* ==== fade to black on scroll effect - intro section ====*/

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.header-overlay').css({
    opacity: function() {
      var elementHeight = $(this).height(),
      opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.9) + 0.2;

      return opacity;
    }
  });
});

/* ==== fade to black on scroll effect - parallax_foot section ====*/

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.header_overlay_1').css({
    opacity: function() {
      var elementHeight = $(this).height(),
      opacity = ((2 + (elementHeight + scrollTop) / elementHeight) * .025) + -.5;

    return opacity;
    }
  });
});

/* ====== year automatic footer */
$(document).ready(function() {
  document.getElementById("year").innerHTML = new Date().getFullYear();
});

/*====== Google Analytic ======*/
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-130589444-1', 'auto');
  ga('set', 'anonymizeIp', true);
  ga('send', 'pageview');
  ga('require', 'displayfeatures');