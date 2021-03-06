$(function() {


	$(".mouse-icon").click(function(){
		$("html, body").animate({
			scrollTop : $(".s-adv").offset().top
		}, 1000);
	});
	// Custom JS
$(".s-adv").waypoint(function() {

	$({blurRadius: 5}).animate({blurRadius: 0}, {
		duration: 1000,
		easing: 'swing',
		step: function() {
			$(".s-adv-item h3 span").css({
				"-webkit-filter": "blur("+this.blurRadius+"px)",
				"filter": "blur("+this.blurRadius+"px)"
			});
		}
	});
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".s-adv-item h3 span").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			"font-size": "40px",
			numberStep: comma_separator_number_step},
			1000);
	});
}, {
  offset: '90%'
});
	
	//Animation-number
	
	$(".vertikal-item p").equalHeights();


$(".portfolio-item").each(function(e){
	var th = $(this);
	th.attr("href", "#portfolio-img-" + e)
	.find(".portfolio-popup")
	.attr("id", "portfolio-img-" + e)
	;

});
$(".portfolio-item, a[href='#callback'] ").magnificPopup({

	mainClass: 'my-mfp-zoom-in',
	removalDelay: 300,
	type: 'inline'

});

$(".partner-slider").owlCarousel({
	dots: false,
	nav: false,
	loop: true,
	autoplay:true,
	autoplayTimeout:4000,
	autoplaySpeed: true,
	autoplaySpeed: 800,
	autoplayHoverPause:true,
	smartSpeed: 700,
	navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
	responsiveClass: true,
	responsive:{
		0:{
			items: 1
		},
		800:{
			items: 2
		},
		1100:{
			items: 3
		}

	}


});




$(".top-line-1.sf-menu").superfish({
	cssArrows: true,
	delay:300,
	speed:'slow', 
});



// $(window).scroll(function() {
// 	if ($(this).scrollTop() > 1){
// 	$('.top-box').addClass("glide");
// 	}
// 	else{
// 	$('.top-box').removeClass("glide");
// 	}
// 	});
$('.callback').submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		$(".callback .succes").addClass("visible");
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
			$('.callback .succes').removeClass("visible")
			$.magnificPopup.close();
		}, 3000);
	});
	return false;
});


$("body").append('<div class="top"><i class="fa fa-angle-double-up">');



$(".top").click(function(){

	$("html, body").animate({scrollTop: 0}, "slow");

});


$(window).scroll(function() {
	if($(this).scrollTop() > $(this).height()){
		$(".top").addClass("active");
	} else {
		$(".top").removeClass("active");
	}
});
});
