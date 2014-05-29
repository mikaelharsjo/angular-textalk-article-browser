'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should fetch article groups', inject(function($controller) {
    var scope = {}
    var articleGroupController = $controller('ArticleGroupsCtrl', { $scope: scope });
    expect(scope.articleGroups.length).toBeDefined();
  }));
});
