$(function(){
	$(".navigation").find(".nav-choose").on("click",function(){
		$(".navigation").find(".nav-choose").css("background","transparent");
		$(this).css("background","#29A6DC");
		var index=$(this).index();
		$(".choose").css("opacity",0).eq(index).css("opacity",1);
		
	});
});
