angular.module('myApp')
.controller('AboutController' , function($scope , $rootScope) {
  $rootScope.PAGE = "about";
	$scope.message = " hahahaha" ;
})
.controller('HomeController' , function ($scope, $rootScope, $http , $location){

 



  $rootScope.PAGE = "home";
  $http( {
    method : 'GET' ,
    url : '/abc' ,
    headers: {
   'Content-Type': 'application/json'
 }
  }).success( function(data , status , headers , config) {
    $scope.name1 = data[0].name1;
    $scope.name2 = data[0].name2;
    $scope.path1 = data[0].imgpath;
    $scope.path2 = data[0].img2path;
  });
// var contacts = cont.query();
// console.log(contacts);
})
.controller('CarouselDemoCtrl' , function ($scope , $http){
  $scope.myInterval = 3000;
    $http( {
    method : 'GET' ,
    url : '/bcd' ,
    headers: {
   'Content-Type': 'application/json'
 }
  }).success( function(data , status , headers , config) {
     var image1 = data[0].image1;
     var image2 = data[0].image2;
     var test = "'" + image1 + "'";
     console.log(test);


      $scope.slides = [
     
    {
        image: image1
    },
    {
      image: image2
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

  });

 
})
.controller('GalleryController' , function($scope , $rootScope) {
  $rootScope.PAGE = "gallery";
  $scope.message = " hahahaha" ;
})
.controller('QueryController' , function($scope , $http ,$rootScope , $location , $route) {
  $rootScope.PAGE = "query";

  $scope.check = function()
  {
  var obj = {
    name : $scope.name ,
    mail : $scope.mail ,
    mob : $scope.mob ,
    Query : $scope.Query
  };
   $http({
            method: 'POST',
            url: '/abcd',
            data: $.param(obj) ,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).
        success( function(response) {
            console.log("success");
        }).
        error( function(response) {
            console.log("error");
        });
 
$route.reload();
  
};
  
});