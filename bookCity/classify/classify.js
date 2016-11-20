app=angular.module("test",[]);
app.controller("classify",["$scope",function($scope){
	$scope.lists=[
	{name:"新书"},
	{name:"热门"},
	{name:"社会"},
	{name:"政治"}
	]	
	
}])