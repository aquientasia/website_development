$(document).ready(function() {
	function toggleNav(){
		var screenWidth = $(window).width();

		if (screenWidth <= 1024) {
			$(".main-nav").addClass("toggleHeight");

			$(".burger-nav").click(function(){

				if($(".main-nav").hasClass("toggleHeight")){
					$(".main-nav").toggleClass("toggleHeight");
				}
				else{
					$(".main-nav").addClass("toggleHeight");
				}

			});
		}
		else{
			$(".main-nav").removeClass("toggleHeight");
		}
	}

	toggleNav();

	$(window).resize(function(){

		var screenWidth = $(window).width();
		toggleNav();

	});

});