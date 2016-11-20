app.controller("catalogueCtrl",["$scope",function($scope){

}])
$(function(){
	$(".catalogue").find(".nav-choose").on("click",function(){
		console.log(5)
		$(".navigation").find(".nav-choose").css("background","transparent");
		$(this).css("background","#29A6DC");
		var index=$(this).index();
		$(".choose").css("opacity",0).eq(index).css("opacity",1);
		
	});
});
