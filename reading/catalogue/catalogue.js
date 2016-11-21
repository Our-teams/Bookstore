app.controller("catalogueCtrl",["$scope",function($scope){

}])
$(document).ready(function(){
	console.log($(".navigation"))
	$(".navigation").find(".nav-choose").on("click",function(){
		$(".navigation").find(".nav-choose").css({"background":"none","background-size":"cover"});
		$(this).css({"background":"url(img/x1.png)","background-size":"cover"});
		var index=$(this).index();
		$(".choose").css("opacity",0).eq(index).css("opacity",1);
		
	});
})
app.directive("mycata",[function(){
	return{
		restrict:"A",
		replace:true,
		template: '<div class="catalogue"><ul ng-transclude></></div>',
		transclude:true,
		link:function($scope,el){
			$(el).find(".nav-choose").on("click",function(){
//				$(el).find(".nav-choose").css("background","rgba(0,0,0,0")
//				$(this).css("background","../../img/x1.png")
				var index=$(this).index()
				console.log(index)
				$(el).find(".choose").css("opacity","0").eq(index).css("opacity","1")
			})
		}
	}
}])