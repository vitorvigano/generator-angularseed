'use strict';

/* configurations */

var app = angular.module('<%= projectName %>', ['<%= projectName %>.controllers',
                                     '<%= projectName %>.services',
                                     '<%= projectName %>.directives',
                                     '<%= projectName %>.filters']);

// route configurations
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/view1.html',
            controller: ''
        }).
        otherwise({
            redirectTo: '/'
        });
}]);