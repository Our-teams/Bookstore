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

		}).when('/shuping',{
			templateUrl:'pages/shuping/shuping.html',
			controller:'shupingCtrl'

		}).when('/success',{
			templateUrl:'pages/Success/Success.html',
			controller:'successCtrl'
<<<<<<< HEAD
			
		}).when('/manageshu',{
			templateUrl:'pages/manageshu/manageshu.html',
			controller:'manageshuCtrl'
			
		}).when('/managesnote',{
			templateUrl:'pages/managesnote/managesnote.html',
			controller:'managesnoteCtrl'
			
=======
		}).when('/inreading',{
			templateUrl:'reading/inreading/inreading.html',
			controller:'inreadingCtrl'
		}).when('/catalogue',{
			templateUrl:'reading/catalogue/catalogue.html',
			controller:'catalogueCtrl'
		}).when('/bookmark',{
			templateUrl:'reading/bookmark/bookmark.html',
			controller:'bookmarkCtrl'
>>>>>>> 1ae3ff5ee0d22ef9f0044ebf16f82cf67bce2ea6
		})
	}
])
