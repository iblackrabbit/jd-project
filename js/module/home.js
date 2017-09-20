require(["../config"], function() {
	require(["jquery", "https://ai.jd.com/index_new.php?app=Seckill&action=pcIndexMiaoShaArea&callback=define&isAdvance=0&_=1505801336875", "template"], function($, data2, template) {
		$("#shortcut").load("http://localhost:8080/html/sub/header.html");
		$("#footer").load("http://localhost:8080/html/sub/footer.html");
		$("#coupon_lazy").load("http://localhost:8080/html/sub/couponcenter.html");
		$("#rec_1").load("http://localhost:8080/html/sub/rec_1.html");
		$("#entry_1").load("http://localhost:8080/html/sub/entry_1.html");
		$("#rec_2").load("http://localhost:8080/html/sub/rec_2.html");
		$("#portal_1").load("http://localhost:8080/html/sub/portal_1.html");
		$("#portal_2").load("http://localhost:8080/html/sub/portal_2.html");
		$("#portal_3").load("http://localhost:8080/html/sub/portal_3.html");
		$("#portal_4").load("http://localhost:8080/html/sub/portal_4.html");
		$("#fs_act_lk .fs_act_lk_img").on("mouseenter", function() {
			$("#fs_act_banner").css("overflow", "visible");
			$(".fs_act").on("mouseleave", function() {
				$("#fs_act_banner").css("overflow", "hidden");
			});
		});
		//底部雪碧图
		$(".ft_ul_li_h5").each(function(i) {
			$(this).css("backgroundPositionY", -i * 43);
		});
		require(["swiper"], function() {
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				autoplay: 4000,
				autoplayDisableOnInteraction: false,
				effect: 'fade',
				// 如果需要分页器
				pagination: '.swiper-pagination',
				paginationClickable: true,
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev'
			});
			$(".swiper-container").on("mouseenter", function() {
				$(".swiper-button-next,.swiper-button-prev").css("visibility", "visible");
				mySwiper.stopAutoplay();
			});
			$(".swiper-container").on("mouseleave", function() {
				$(".swiper-button-next,.swiper-button-prev").css("visibility", "hidden");
				mySwiper.startAutoplay();
			});

			var mySwiper = new Swiper('.swiper-container_sk1', {
				direction: 'horizontal',
				loop: false,
				autoplay: 4000,
				autoplayDisableOnInteraction: false,
				effect: 'slider',
				// 如果需要分页器
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev'
			});
			$(".swiper-container_sk1").on("mouseenter", function() {
				$(".sk1").css("visibility", "visible");
				mySwiper.stopAutoplay();
			});
			$(".swiper-container_sk1").on("mouseleave", function() {
				$(".sk1").css("visibility", "hidden");
				mySwiper.startAutoplay();
			});
			var mySwiper = new Swiper('.swiper-container_sk2', {
				direction: 'horizontal',
				loop: true,
				autoplay: 2000,
				autoplayDisableOnInteraction: false,
				effect: 'fade',
				// 如果需要分页器
				pagination: '.swiper-pagination',
				paginationClickable: true,
			});
		});

		$(window).load(function() {
			$.ajax({
				type: "get",
				url: "https://so.m.jd.com/ware/hotKeyWord.action?_format_=json",
				//					url:"https://item.m.jd.com/ware/getDetailCommentList.json?wareId=1593516",
				success: function(data) {
					var result = JSON.parse(data.hotKeyWord);
					//						console.log(result.def);
					//						console.log(result.owner);
					var hotword_arr = result.owner;
					var hotword_bar = $(".hotwords");
					for(var i = 0; i < hotword_arr.length; i++) {
						var hotword_link = $("<a href='javascript:;'>");
						hotword_link.text(hotword_arr[i].hotWord);
						hotword_bar.append(hotword_link);
					}
				}
			});
					for(var i=0;i<5;i++){
						
						console.log(data2.indexMiaoSha[i].wname);
						console.log(data2.indexMiaoSha[i].imageurl);
						console.log(data2.indexMiaoSha[i].miaoShaPrice);
						console.log(data2.indexMiaoSha[i].jdPrice);
					}
			//动态生成秒杀列表
			var str = `
				<% for(var i=0;i<5;i++){ %>
					<li class="sk_item">
						<div class="sk_item_pic">
								<div class="sk_item_tag">
								</div>
							<a href="" class="sk_item_pic_lk">
								<img src="<%=data.indexMiaoSha[i].imageurl%>" class="sk_item_img" />
								<p class="sk_item_name"><%=data.indexMiaoSha[i].wname%></p>
							</a>
							<span class="sk_item_shadow"></span>
							<p class="sk_item_price">
								<span class="sk_item_price_new">
									<i>¥</i>
									<span>
										<%=data.indexMiaoSha[i].miaoShaPrice%>
									</span>
								</span>
								<span class="sk_item_price_origin">
									<i>¥</i>
									<del><%=data.indexMiaoSha[i].jdPrice%></del>
								</span>
							</p>
						</div>
					</li>
				<% } %>
			`;
			var htmltemp = template(str,data2);
			$("#sk_list").html(htmltemp);
			var str1 = `
				<% for(var i=5;i<10;i++){ %>
					<li class="sk_item">
						<div class="sk_item_pic">
								<div class="sk_item_tag">
								</div>
							<a href="" class="sk_item_pic_lk">
								<img src="<%=data.indexMiaoSha[i].imageurl%>" class="sk_item_img" />
								<p class="sk_item_name"><%=data.indexMiaoSha[i].wname%></p>
							</a>
							<span class="sk_item_shadow"></span>
							<p class="sk_item_price">
								<span class="sk_item_price_new">
									<i>¥</i>
									<span>
										<%=data.indexMiaoSha[i].miaoShaPrice%>
									</span>
								</span>
								<span class="sk_item_price_origin">
									<i>¥</i>
									<del><%=data.indexMiaoSha[i].jdPrice%></del>
								</span>
							</p>
						</div>
					</li>
				<% } %>
			`;
			var htmltemp1 = template(str1,data2);
			$("#sk_list1").html(htmltemp1);
		});
	})
})