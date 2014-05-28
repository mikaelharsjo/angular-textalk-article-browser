'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  }])

  .controller('MyCtrl2', ['$scope', function($scope) {
  }])

  .controller('ArticleGroupCtrl', ['$scope', function ($scope) {
  	$scope.articleGroups = []
    var client = new $.JsonRpcClient({ socketUrl: 'ws://shop.textalk.se/backend/jsonrpc/v1?webshop=11011' });
    var articleGroupFetched = function(group) {
    	$scope.$apply(function(){
    		$scope.articleGroups.push(group);
    	});
    }
    var articleGroupIdsFetched = function(ids) {
      angular.forEach(ids, function(groupId) {
        client.call('Articlegroup.get', [groupId], articleGroupFetched);	
      }); 
    }

    client.call('Assortment.getArticlegroupUids', [], articleGroupIdsFetched); 	
  }]);


