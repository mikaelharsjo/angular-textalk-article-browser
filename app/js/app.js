'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'StartCtrl'});
  $routeProvider.when('/article-group/:uid', {templateUrl: 'partials/article-group.html', controller: 'ArticleGroupCtrl'});
  $routeProvider.when('/article/:uid', {templateUrl: 'partials/article.html', controller: 'Article'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);