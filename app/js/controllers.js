'use strict';

/* Controllers */

var client = new $.JsonRpcClient({ socketUrl: 'ws://shop.textalk.se/backend/jsonrpc/v1?webshop=11011' });

angular.module('myApp.controllers', [])
  .controller('StartCtrl', ['$scope', function($scope) {
  }])

  .controller('ArticleGroupsCtrl', ['$scope', function($scope) {
  	$scope.articleGroups = []
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
  }])

  .controller('ArticleGroupCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.articleGroupUid = $routeParams.uid;
    $scope.articles = []   

    //client.call('Assortment.getArticleUids', [$scope.articleGroupUid], articlesUidsFetched)
    // Assortment.getArticleUids always returns empty array?
    // Workaround is to hardcode articles
    var articles = [
      { name: 'Artikel1', uid: 1, articleGroupUid: 290269 },
      { name: 'Artikel2', uid: 2, articleGroupUid: 290269 },
      { name: 'Artikel3', uid: 3, articleGroupUid: 290269 },
      { name: 'Artikel4', uid: 4, articleGroupUid: 295189 },
    ]

    angular.forEach(articles, function(article){
    	if (article.articleGroupUid == $scope.articleGroupUid) {
    		$scope.articles.push(article);
    	}
    })
  }]);

