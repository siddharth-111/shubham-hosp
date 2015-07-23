angular.module("myApp")
    .factory('Cont', function ($resource) {

        return $resource('/abc', {}, {'get': { method:'GET' , isArray: true } });   
    });