require(["config"], function() {
	require(["jquery"], function($) {
		require(["swiper"], function() {
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'horizontal',
				loop: true,

				// 如果需要分页器
				pagination: '.swiper-pagination',

				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',

				
			})
			$(".swiper-container").on("mouseenter",function(){
				$(".swiper-button-prev,.swiper-button-next").css("visibility","visible");
				
			});
			$(".swiper-container").on("mouseleave",function(){
				$(".swiper-button-prev,.swiper-button-next").css("visibility","hidden");
			});
		});

	})
})