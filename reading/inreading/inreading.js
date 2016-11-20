$(function(){
	var first;
	var inNub=0;
	
	$(".set li:nth-child(1)").on("click",function(){
		console.log(0)
		$(".page-opacity").removeClass("ftstact").addClass("ftstact2");
		$(".font-set").removeClass("ftstact2").addClass("ftstact")
	})
	$(".set li:nth-child(3)").on("click",function(){
		console.log(0)
		$(".page-opacity").removeClass("ftstact").addClass("ftstact2");
		$(".back-op").removeClass("ftstact2").addClass("ftstact")
	})
//	读书页面滑出菜单
	$(document).on("touchstart",function(e){
		console.log(9)
e.preventDefault();
		if(e.originalEvent.changedTouches[0].clientY>600){
		 first=e.originalEvent.changedTouches[0].clientY;
		}
		if(inNub%2==0){
			$(".out-by").addClass("out-act").removeClass("out-act2")
		}else{
			$(".out-by").addClass("out-act2").removeClass("out-act")
		}
		inNub+=1
		
	})
		$(document).on("touchmove",function(){
		$(document).on("touchstart",false)
		$(document).on("touchend",function(e){
			var last=e.originalEvent.changedTouches[0].clientY;
			if(first){
				var line=first-last;
				if(line>20){
					$(".page-opacity").removeClass("fontSet-act2").addClass("fontSet-act")
				}else if(line<0){
					$(".page-opacity").removeClass("fontSet-act").addClass("fontSet-act2")
				}
			}
			$(document).on("touchmove",false);
			$(document).on("touchend",false)
		})
	});
//	下方点击
	console.log($(".page-opacity .pro-go"))
	$(".page-opacity .pro-go").find(".pro-cir").on("touchstart",function(e){
		e.preventDefault();
		var proF=e.originalEvent.changedTouches[0].clientX;		$(document).on("touchmove",function(e){
			var progo=e.originalEvent.changedTouches[0].clientX-$(".pro-cir").offset().left+($(".pro-cir").outerWidth()/2)
				if(progo>=0 && progo<466){
					$(".pro-cir").css("left",progo)
				}else{
					return
				}
				
			})
	})
$(document).on("touchend", function() {
				$(document).off("touchmove")
				$(document).off("touchend").touch
			})
//	調節字號大小
	$(".font-set .pro-go").find(".pro-cir").on("touchstart",function(e){
		e.preventDefault();
		var proF=e.originalEvent.changedTouches[0].clientX;
		$(document).on("touchmove",function(e){
			var progo=e.originalEvent.changedTouches[0].clientX-$(".pro-cir").offset().left+($(".pro-cir").outerWidth()/2)
				if(progo>=0 && progo<466){
					$(".pro-cir").css("left",progo)
				}else{
					return
				}
			})
	})
$(document).on("touchend", function() {
				$(document).off("touchmove")
				$(document).off("touchend").touch
			})
})

