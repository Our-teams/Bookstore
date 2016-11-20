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
			
		}).when('/manageshu',{
			templateUrl:'pages/manageshu/manageshu.html',
			controller:'manageshuCtrl'
			
		}).when('/managesnote',{
			templateUrl:'pages/managesnote/managesnote.html',
			controller:'managesnoteCtrl'
			
		}).when('/inreading',{
			templateUrl:'reading/inreading/inreading.html',
			controller:'inreadingCtrl'
		}).when('/catalogue',{
			templateUrl:'reading/catalogue/catalogue.html',
			controller:'catalogueCtrl'
		}).when('/bookmark',{
			templateUrl:'reading/bookmark/bookmark.html',
			controller:'bookmarkCtrl'
		}).when('/yijianfankui',{
			templateUrl:'mybook/yijianfankui/yijianfankui.html',
			controller:'yijianfankuiCtrl'
		}).when('/wodeziliao',{
			templateUrl:'mybook/wodeziliao/wodeziliao.html',
			controller:'wodeziliaoCtrl'
		}).when('/wodexinxi',{
			templateUrl:'mybook/wodexinxi/wodexinxi.html',
			controller:'wodexinxiCtrl'
		}).when('/shezhi',{
			templateUrl:'mybook/shezhi/shezhi.html',
			controller:'shezhiCtrl'
		}).when('/pianhaoxuanze',{
			templateUrl:'mybook/pianhaoxuanze/pianhaoxuanze.html',
			controller:'pianhaoxuanzeCtrl'
		}).when('/gerenzhongxin',{
			templateUrl:'mybook/gerenzhongxin/gerenzhongxin.html',
			controller:'gerenzhongxinCtrl'
		}).when('/banbenxinxi',{
			templateUrl:'mybook/banbenxinxi/banbenxinxi.html',
			controller:'banbenxinxiCtrl'
		})
	}
])
