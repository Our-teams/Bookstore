app.config([
	'$routeProvider',
	function($routeProvider){
		$routeProvider.when('/',{
			
		}).when('/reading',{
			templateUrl:'pages/reading/reading.html',
			controller:'readCtrl'
		}).when('/note',{
			templateUrl:'pages/note/note.html',
			controller:'noteCtrl'
		}).when('/read2',{
			templateUrl:'pages/read2/read2.html',
			controller:'read2Ctrl'

		}).when('/read2',{
			templateUrl:'pages/read2/read2.html',
			controller:'read2Ctrl'

		}).when('/shuping',{
			templateUrl:'pages/shuping/shuping.html',
			controller:'shupingCtrl'
		})
	}
])
