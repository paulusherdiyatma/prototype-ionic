angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'modules/root/views/root.html',
                controller: 'RootController'
            })
            .state('app.welcome', {
                url: '/welcome',
                views: {
                    'content': {
                        templateUrl: 'modules/welcome/views/welcome.html',
                        controller: 'WelcomeController'
                    }
                }
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'content': {
                        templateUrl: 'modules/user/views/login.html',
                        controller: 'LoginController'
                    }
                }
            })
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/welcome');
    });
