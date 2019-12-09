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
$(".portfolio-item").magnificPopup({

	mainClass: 'my-mfp-zoom-in',
	removalDelay: 300,
	type: 'inline'

});


});
