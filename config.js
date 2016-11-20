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
<<<<<<< HEAD
		}).when('/read2',{
			templateUrl:'pages/read2/read2.html',
			controller:'read2Ctrl'
=======
		}).when('/shuping',{
			templateUrl:'pages/shuping/shuping.html',
			controller:'shupingCtrl'
>>>>>>> 60365c962e221e462d1c61a33b83e5b52c878b54
		})
	}
])
