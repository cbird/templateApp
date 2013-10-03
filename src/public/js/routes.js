define(['globals'], function (globals) {
    'use strict';

    var routeConfig = ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/', //here we can add params like, :oneParam
            {
                templateUrl: 'partials/mainView.html',
                //controller: 'MainViewCtrl' //use when only one controller exists in the template
                resolve: {
                    testData: ['$q', '$route', 'exampleService', function ($q, $route, exampleService) {
                        var deferred = $q.defer();
                        exampleService.getWithPromise() //here we can send in data from the routeparams or querystring, example: $route.current.pathParams.oneParam
                            .then(function(data){ 
                                deferred.resolve(data); 
                            });
                        return deferred.promise;
                    }]
                }
            });

        $routeProvider.when('/about',
            {
                templateUrl: 'partials/about.html'
            });

        $routeProvider.when('/contact',
            {
                templateUrl: 'partials/contact.html'
            });

        //all other routes redirects to /
        $routeProvider.otherwise({redirectTo: '/'});

        //in order to get nicer routes without #.. remove if old browsers are supported
        $locationProvider.html5Mode(true);
    }];

    return angular.module(globals.appName + '.routes', [])
        .config(routeConfig);
});
