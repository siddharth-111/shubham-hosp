angular.module('myApp')
.controller('AboutController' , function($scope , $rootScope) {
  $rootScope.PAGE = "about";
	$scope.message = " hahahaha" ;
})
.controller('CarouselDemoCtrl' , function ($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    },
   	{
      image: 'http://lorempixel.com/400/200/sports/1/'
    },
    {
      image: 'http://lorempixel.com/400/200/'
    }
  ];
   $scope.$watch('slides', function(values) {

    var i, a = [], b , c;

    for (i = 0; i < $scope.slides.length; i += 3) {
      b = { image1: $scope.slides[i] };

      if ($scope.slides[i + 1]) {
        b.image2 = $scope.slides[i + 1];
      }
      if ($scope.slides[i + 2]) {
        b.image3 = $scope.slides[i + 2];
      }

      a.push(b);
    }

    $scope.groupedSlides = a;

  }, true);
})
.controller('HomeController' , function($scope , $rootScope) {
  $rootScope.PAGE = "home";
  $scope.message = " hahahaha" ;
})
.controller('QueryController' , function($scope , $rootScope) {
  $rootScope.PAGE = "query";
  $scope.message = " hahahaha" ;
});