(function($){

	new WOW().init();


	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.header').removeClass('sticky');
			}else{
				$('.header').addClass('sticky');
			}
		});
	});
	$(function(){

		$(".js-video-button").modalVideo({
			youtube:{
			  controls:0,
			  nocookie: true,
				   autoplay:true,
			}
		  });
	});
	
 //   Back btn-----//Get the button

 var btn = $('#button');

 $(window).scroll(function() {
   if ($(window).scrollTop() > 300) {
	 btn.addClass('show');
   } else {
	 btn.removeClass('show');
   }
 });
 
 btn.on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({scrollTop:0}, '300');
 });

}(jQuery));