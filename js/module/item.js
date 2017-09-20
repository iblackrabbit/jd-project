require(["../config"], function() {
	require(["jquery","template"], function($,template) {

		$smallImg = $("#spec-img");
		$bigImg = $("#zoom_img");
		$("#spec-list .lh li").on("mouseenter", function(e) {
			$(this).attr("class", "img-hover");
			$sImgUrl = $(this).find("img").attr("data-url");
			$bImgUrl = $(this).find("img").attr("data-img");
			$smallImg.attr("src",$sImgUrl);
			$bigImg.attr("src",$bImgUrl);
			$(this).siblings().attr("class", "");
		});
		$small = $("#spec-n1");
		$mask = $("#item_zoom_mask");
		$big = $("#item_zoom_big");

		$small.mouseenter(function() {
			$mask.css("display", "block");
			$big.css("display", "block");
		});
		$small.mouseleave(function() {
			$mask.css("display", "none");
			$big.css("display", "none");
		});
		let x, y = 0;
		$small.mousemove(function(e) {
			x = Math.min(Math.max(0, e.clientX - $small.offset().left - $mask.innerWidth() / 2), $small.innerWidth() - $mask.innerWidth());
			y = Math.min(Math.max(0, e.clientY - $small.offset().top - $mask.innerHeight() / 2 + $(window).scrollTop()), $small.innerHeight() - $mask.innerHeight());
			$mask.css({
				left: x,
				top: y
			});
			$bigImg.css({
				left: -x * $big.innerWidth() / $small.innerWidth(),
				top: -y * $big.innerHeight() / $small.innerHeight()
			});
		});
		$(window).load(function() {
			$.ajax({
				type:"get",
				url:"/api/ware/getDetailCommentList.json?wareId=1593516",
				async:true,
				success:function(data){
					console.log(data);
				}
			});
		});
	});
});