'use strict';

/* configurations */

var app = angular.module('<%= moduleName %>', ['<%= moduleName %>.controllers',
                                     '<%= moduleName %>.services',
                                     '<%= moduleName %>.directives',
                                     '<%= moduleName %>.filters']);

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