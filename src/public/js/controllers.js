define(
    [
        'globals',
        'services',
        'controllers/NavbarCtrl',
        'controllers/ExampleCtrl',
        'controllers/Example2Ctrl'
    ], function (globals) {
        'use strict';

        return angular.module(globals.appName + '.controllers', [globals.appName + '.services'])
            .controller(
                'NavbarCtrl',
                [
                    '$scope',
                    '$injector',
                    function($scope, $injector) {
                        require(['controllers/NavbarCtrl'], function(NavbarCtrl) {
                            $injector.invoke(
                                NavbarCtrl,
                                this,
                                {
                                    '$scope': $scope
                                }
                            );
                        });
                    }
                ]
            )
            .controller(
                'ExampleCtrl',
                [
                    '$scope',
                    '$injector',
                    'exampleService',
                    function($scope, $injector, exampleService) {
                        require(['controllers/ExampleCtrl'], function(ExampleCtrl) {
                            $injector.invoke(
                                ExampleCtrl,
                                this,
                                {
                                    '$scope': $scope,
                                    'exampleService': exampleService
                                }
                            );
                        });
                    }
                ]
            )
            .controller(
                'Example2Ctrl',
                [
                    '$scope',
                    '$injector',
                    'exampleService',
                    function($scope, $injector, exampleService)  {
                        require(['controllers/Example2Ctrl'], function(Example2Ctrl) {
                            $injector.invoke(
                                Example2Ctrl,
                                this,
                                {
                                    '$scope': $scope,
                                    'exampleService': exampleService
                                }
                            );
                        });
                    }
                ]
            );
    }
);
