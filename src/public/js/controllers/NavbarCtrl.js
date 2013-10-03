define([], function() {
    'use strict';
    return ['$scope', function($scope) {
        $scope.selected = 1;
        $scope.isCollapsed = true;

        $scope.select = function (item) {
            $scope.selected = item;
        };

        $scope.class = function (item) {
            return item === $scope.selected ? 'active' : undefined;
        };

        $scope.$apply();
    }];
});