app.controller("inreadingCtrl",["$scope",function($scope){
			$scope.color = ["#FFE7A7", "green", "yellow", "brown", "pink", "orange", "purple"];
		if(localStorage.reminder) {
			$scope.lists = JSON.parse(localStorage.reminder)
		} else {
			$scope.lists = []
		}
		$scope.save2local = function() {
				localStorage.reminder = JSON.stringify($scope.lists)
			}

		$scope.cu = 0;
		//		点击添加
		$scope.additem = function() {

			var len = $scope.lists.length
			var index = len % 7;
			var m = {
				id: findId() + 1,
				name: "新列表" + (len + 1),
				theme: $scope.color[index],
				todos:[]
			}
			$scope.lists.push(m)
		}
	
}])
app.directive("myreading",[function(){
	return{
		restrict:"A",
		replace:true,
		template: '<div><ul ng-transclude></></div>',
		transclude:true,
		link:function($scope,el){
				var first;
	var inNub=0;
	
//	$(el).find(".set li:nth-child(1)").on("click",function(){
//		console.log(0)
//		$(el).find(".page-opacity").removeClass("ftstact").addClass("ftstact2");
//		$(".font-set").removeClass("ftstact2").addClass("ftstact")
//	})
//	$(el).find(".set li:nth-child(3)").on("click",function(){
//		console.log(0)
//		$(el).find(".page-opacity").removeClass("ftstact").addClass("ftstact2");
//		$(el).find(".back-op").removeClass("ftstact2").addClass("ftstact")
//	})
////	读书页面滑出菜单
//	$(el).find("a").on("touchstart",false);
//console.log($(el).find(".nav a"))
//$(el).find(".nav a").on("click",function(){
//	console.log(9)
//})
//	$(el).find(".out-by").on("touchstart",false);
//	$(el).find(".page-opacity").on("touchstart",false);
//	$(el).find(".header-eight").on("touchstart",false);
//	$(el).find("#reading").on("touchstart",function(e){	
//e.preventDefault();
//
//	if(e.originalEvent.changedTouches[0].clientY>600){
//		 first=e.originalEvent.changedTouches[0].clientY;
//		}
//		if(inNub%2==0){
			$(el).find(".out-by").addClass("out-act").removeClass("out-act2")
			$(el).find(".header-eight").addClass("head-act").removeClass("head-act2")
			$(el).find(".page-opacity").removeClass("fontSet-act2").addClass("fontSet-act")
//		}else{
//			$(el).find(".header-eight").addClass("head-act2").removeClass("head-act");
//			$(el).find(".out-by").addClass("out-act2").removeClass("out-act")
//			$(el).find(".page-opacity").removeClass("fontSet-act").addClass("fontSet-act2")
//
//		}
//		inNub+=1
//		
//	})
	
////	下方点击
//	console.log($(".page-opacity .pro-go"))
//	$(".page-opacity .pro-go").find(".pro-cir").on("touchstart",function(e){
//		e.preventDefault();
//		var proF=e.originalEvent.changedTouches[0].clientX;
//		$(document).on("touchmove",function(e){
//			var progo=e.originalEvent.changedTouches[0].clientX-$(".pro-cir").offset().left+($(".pro-cir").outerWidth()/2)
//				if(progo>=0 && progo<466){
//					$(".pro-cir").css("left",progo)
//				}else{
//					return
//				}
//				
//			})
//	})
//$(document).on("touchend", function() {
//				$(document).off("touchmove")
//				$(document).off("touchend").touch
//			})
////	調節字號大小
//	$(el).find(".font-set .pro-go").find(".pro-cir").on("touchstart",function(e){
//		e.preventDefault();
//		var proF=e.originalEvent.changedTouches[0].clientX;
//		$(el).on("touchmove",function(e){
//			var progo=e.originalEvent.changedTouches[0].clientX-$(el).find(".pro-cir").offset().left+($(el).find(".pro-cir").outerWidth()/2)
//				if(progo>=0 && progo<466){
//					$(el).find(".pro-cir").css("left",progo)
//				}else{
//					return
//				}
//			})
//	})
//$(el).on("touchend", function() {
//				$(el).off("touchmove")
//				$(el).off("touchend")
//			})




















//..............constructor
$(el).find(".shezhi").on("click",function(){
	$(el).find(".back-op").removeClass("ftstact").addClass("ftstact2")
	$(el).find(".page-opacity").removeClass("fontSet-act").addClass("fontSet-act2");	$(el).find(".font-set").removeClass("font-act2").addClass("font-act")
})
$(el).find(".liang").on("click",function(){
	$(el).find(".page-opacity").removeClass("fontSet-act").addClass("fontSet-act2");	$(el).find(".font-set").css("display","none")

	$(el).find(".back-op").removeClass("ftstact2").addClass("ftstact")
})
		}
	}
}])

