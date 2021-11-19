/*===== OnePageNav ======*/
$(document).ready(function() {
			$("#navmenu").onePageNav();
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

$(document).ready(function($){
	$('.menu-toggle').on('click', function(){
  $('.menu').toggleClass('active');
 $('.menu-list, .menu-container').toggleClass('active');
});
	//close menu from item '.menu-container' and background
       $('.menu-container').on('click', function(){
		$(".menu-toggle").click();
        //$(".menu-container").removeClass("active");
		});
	});

/*=== scroll up button ===*/ 

$(document).ready(function () {
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: -20
        }, 600);
        return false;
    });
});