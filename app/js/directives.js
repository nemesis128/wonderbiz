app.directive('ngHeader', function(){
	return {
		restrict: "E",
		templateUrl: 'partials/ng-header.html'
	};
})
.directive('ngFooter', function(){
	return {
		restrict: "E",
		templateUrl: 'partials/ng-footer.html'
	};
})
.directive('progressBar', function(){
	return {
		restrict: "E",
		scope:true,
		templateUrl: 'businessType.html'
	};
});